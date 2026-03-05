"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSiteEditor } from '../useSiteEditor';

export const CachingPanel: React.FC = () => {
  const { currentPage, updatePage } = useSiteEditor();

  const cachingData = currentPage?.caching || {
    enableCache: true,
    cacheTtl: 3600,
    cacheStrategy: 'stale-while-revalidate',
    cacheTags: [],
  };

  const handleUpdate = (field: string, value: any) => {
    if (currentPage) {
      updatePage(currentPage.id, {
        caching: { ...cachingData, [field]: value },
      });
    }
  };

  const removeTag = (idx: number) => {
    const tags = [...(cachingData.cacheTags || [])];
    tags.splice(idx, 1);
    handleUpdate('cacheTags', tags);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Caching</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="cache-enable">Enable Caching</Label>
          <Switch
            id="cache-enable"
            checked={cachingData.enableCache || false}
            onCheckedChange={(checked) => handleUpdate('enableCache', checked)}
          />
        </div>

        {cachingData.enableCache && (
          <>
            <div className="space-y-2">
              <Label htmlFor="cache-ttl">Cache TTL (seconds)</Label>
              <Input
                id="cache-ttl"
                type="number"
                min="60"
                value={cachingData.cacheTtl || 3600}
                onChange={(e) => handleUpdate('cacheTtl', parseInt(e.target.value) || 3600)}
              />
              <p className="text-xs text-slate-500">
                How long to cache content (default: 1 hour)
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cache-strategy">Cache Strategy</Label>
              <Select
                value={cachingData.cacheStrategy || 'stale-while-revalidate'}
                onValueChange={(value) => handleUpdate('cacheStrategy', value)}
              >
                <SelectTrigger id="cache-strategy">
                  <SelectValue placeholder="Select strategy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stale-while-revalidate">
                    Stale-While-Revalidate
                  </SelectItem>
                  <SelectItem value="cache-first">Cache First</SelectItem>
                  <SelectItem value="network-first">Network First</SelectItem>
                  <SelectItem value="no-cache">No Cache</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Cache Tags (for purging)</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {(cachingData.cacheTags || []).map((tag: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded"
                  >
                    <span className="text-sm">{tag}</span>
                    <button
                      onClick={() => removeTag(idx)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Add tag (e.g., home, products)"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && e.currentTarget.value) {
                      handleUpdate('cacheTags', [
                        ...(cachingData.cacheTags || []),
                        e.currentTarget.value,
                      ]);
                      e.currentTarget.value = '';
                    }
                  }}
                />
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};