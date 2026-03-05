"use client";

import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SEOSettingsProps {
  seo: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
  };
  onUpdate: (seo: any) => void;
}

export const SEOSettings: React.FC<SEOSettingsProps> = ({ seo, onUpdate }) => {
  const handleChange = (field: string, value: string) => {
    onUpdate({
      ...seo,
      [field]: value,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">SEO Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="seo-title">Page Title (SEO)</Label>
          <Input
            id="seo-title"
            value={seo.title || ''}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="Enter page title for search engines"
            maxLength={60}
          />
          <p className="text-xs text-slate-500">
            {(seo.title || '').length}/60 characters
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="seo-description">Meta Description</Label>
          <Textarea
            id="seo-description"
            value={seo.description || ''}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="Brief description for search engines"
            rows={3}
            maxLength={160}
          />
          <p className="text-xs text-slate-500">
            {(seo.description || '').length}/160 characters
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="seo-keywords">Keywords (comma separated)</Label>
          <Input
            id="seo-keywords"
            value={seo.keywords || ''}
            onChange={(e) => handleChange('keywords', e.target.value)}
            placeholder="keyword1, keyword2, keyword3"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="seo-ogImage">Open Graph Image URL</Label>
          <Input
            id="seo-ogImage"
            value={seo.ogImage || ''}
            onChange={(e) => handleChange('ogImage', e.target.value)}
            placeholder="https://..."
          />
          <p className="text-xs text-slate-500">
            Image used when sharing on social media
          </p>
        </div>
      </CardContent>
    </Card>
  );
};