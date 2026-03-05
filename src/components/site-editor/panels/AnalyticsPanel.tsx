"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useSiteEditor } from '../useSiteEditor';

export const AnalyticsPanel: React.FC = () => {
  const { currentPage, updatePage } = useSiteEditor();

  const analyticsData = currentPage?.analytics || {
    googleAnalyticsId: '',
    googleTagManagerId: '',
    facebookPixelId: '',
    customScripts: '',
  };

  const handleUpdate = (field: string, value: any) => {
    if (currentPage) {
      updatePage(currentPage.id, {
        analytics: { ...analyticsData, [field]: value },
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics & Tracking</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="analytics-ga">Google Analytics Measurement ID</Label>
          <Input
            id="analytics-ga"
            value={analyticsData.googleAnalyticsId || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('googleAnalyticsId', e.target.value)}
            placeholder="G-XXXXXXXXXX"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="analytics-gtm">Google Tag Manager Container ID</Label>
          <Input
            id="analytics-gtm"
            value={analyticsData.googleTagManagerId || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('googleTagManagerId', e.target.value)}
            placeholder="GTM-XXXXXXX"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="analytics-fb">Facebook Pixel ID</Label>
          <Input
            id="analytics-fb"
            value={analyticsData.facebookPixelId || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('facebookPixelId', e.target.value)}
            placeholder="1234567890"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="analytics-scripts">Custom Scripts (HTML)</Label>
          <Textarea
            id="analytics-scripts"
            value={analyticsData.customScripts || ''}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleUpdate('customScripts', e.target.value)}
            placeholder="<script>...</script>"
            rows={4}
          />
          <p className="text-xs text-slate-500">
            Add custom tracking scripts or code snippets
          </p>
        </div>
      </CardContent>
    </Card>
  );
};