"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Image as ImageIcon, X, Loader2 } from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast';

interface Asset {
  id: string;
  url: string;
  filename: string;
  size: number;
  type: string;
}

interface ImageUploadProps {
  onImageSelect: (url: string) => void;
  currentImage?: string;
  label?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ 
  onImageSelect, 
  currentImage,
  label = "Upload Image" 
}) => {
  const [uploading, setUploading] = useState(false);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loadingAssets, setLoadingAssets] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showError('Please select an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showError('File size must be less than 5MB');
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:3000/api/assets/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');
      
      const asset = await response.json();
      onImageSelect(asset.url);
      showSuccess('Image uploaded successfully');
      fetchAssets();
    } catch (error) {
      showError('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      const fakeEvent = { target: { files: [file] } } as any;
      handleFileUpload(fakeEvent);
    }
  };

  const fetchAssets = async () => {
    setLoadingAssets(true);
    try {
      const response = await fetch('http://localhost:3000/api/assets', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch assets');
      
      const data = await response.json();
      setAssets(data);
    } catch (error) {
      console.error('Failed to load assets:', error);
    } finally {
      setLoadingAssets(false);
    }
  };

  const selectAsset = (url: string) => {
    onImageSelect(url);
  };

  const clearImage = () => {
    onImageSelect('');
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>{label}</Label>
        
        {/* Current Image Preview */}
        {currentImage && (
          <div className="relative group">
            <img 
              src={currentImage} 
              alt="Preview" 
              className="w-full h-48 object-cover rounded-lg border"
            />
            <Button
              variant="destructive"
              size="sm"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={clearImage}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Upload Area */}
        <div 
          className={`relative flex-1 border-2 rounded-lg transition-colors ${
            dragOver ? 'border-blue-500 bg-blue-50' : 'border-dashed'
          }`}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={(e) => { e.preventDefault(); setDragOver(false); }}
          onDrop={handleDrop}
        >
          <div className="flex items-center justify-center w-full p-4">
            <div className="text-center">
              <Upload className="h-8 w-8 mx-auto mb-2 text-slate-400" />
              <p className="text-sm text-slate-600">
                {uploading ? 'Uploading...' : 'Drag & drop or click to upload'}
              </p>
              <p className="text-xs text-slate-400 mt-1">Max 5MB</p>
            </div>
          </div>
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            disabled={uploading}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>

        {/* Asset Library */}
        <div className="space-y-2">
          <Label>Asset Library</Label>
          <Button
            variant="outline"
            size="sm"
            onClick={fetchAssets}
            disabled={loadingAssets}
            className="w-full"
          >
            {loadingAssets ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <ImageIcon className="h-4 w-4 mr-2" />
                Browse Assets
              </>
            )}
          </Button>

          {assets.length > 0 && (
            <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 border rounded-lg">
              {assets.map((asset) => (
                <div
                  key={asset.id}
                  className="relative group cursor-pointer border rounded overflow-hidden"
                  onClick={() => selectAsset(asset.url)}
                >
                  <img
                    src={asset.url}
                    alt={asset.filename}
                    className="w-full h-20 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs">Select</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};