"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useSiteEditor } from '../useSiteEditor';

export const SEOPanel: React.FC = () => {
  const { currentPage, updatePage } = useSiteEditor();

  const seoData = (currentPage as any)?.seo || {
    title: '',
    description: '',
    keywords: '',
    ogImage: '',
    canonicalUrl: '',
    noIndex: false,
  };

  const handleUpdate = (field: string, value: any) => {
    if (currentPage) {
      updatePage(currentPage.id, {
        seo: { ...seoData, [field]: value },
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>SEO Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="seo-title">Meta Title</Label>
          <Input
            id="seo-title"
            value={seoData.title || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('title', e.target.value)}
            placeholder="Page title for search engines"
            maxLength={60}
          />
          <p className="text-xs text-slate-500">
            {(seoData.title || '').length}/60 characters
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="seo-description">Meta Description</Label>
          <Textarea
            id="seo-description"
            value={seoData.description || ''}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleUpdate('description', e.target.value)}
            placeholder="Brief description for search engines"
            rows={3}
            maxLength={160}
          />
          <p className="text-xs text-slate-500">
            {(seoData.description || '').length}/160 characters
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="seo-keywords">Keywords (comma separated)</Label>
          <Input
            id="seo-keywords"
            value={seoData.keywords || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('keywords', e.target.value)}
            placeholder="keyword1, keyword2, keyword3"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="seo-ogImage">Open Graph Image URL</Label>
          <Input
            id="seo-ogImage"
            value={seoData.ogImage || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('ogImage', e.target.value)}
            placeholder="https://..."
          />
          <p className="text-xs text-slate-500">
            Image used when sharing on social media
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="seo-noIndex"
            checked={seoData.noIndex || false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('noIndex', e.target.checked)}
            className="rounded border-slate-300"
          />
          <Label htmlFor="seo-noIndex" className="text-sm font-normal">
            No Index (hide from search engines)
          </Label>
        </div>
      </CardContent>
    </Card>
  );
};