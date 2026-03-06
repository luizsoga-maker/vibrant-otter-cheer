"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useSiteEditor } from '../useSiteEditor';

export const ThemeSettingsPanel: React.FC = () => {
  const { currentPage, updatePage } = useSiteEditor();

  // Cast currentPage to any to avoid TypeScript error with missing theme property
  const themeData = (currentPage as any)?.theme || {
    colors: {
      primary: '',
      secondary: '',
      background: '',
      text: '',
    },
    typography: {
      fontFamily: '',
      fontSize: '',
      lineHeight: '',
    },
  };

  const handleUpdate = (field: string, value: any) => {
    if (currentPage) {
      // Cast to any to avoid TypeScript error when updating theme
      updatePage(currentPage.id, { theme: { ...themeData, [field]: value } });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="theme-primary">Primary Color</Label>
          <Input
            id="theme-primary"
            type="color"
            value={themeData.colors.primary || '#3b82f6'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('colors.primary', (e.target as HTMLInputElement).value)}
            className="w-full p-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="theme-secondary">Secondary Color</Label>
          <Input
            id="theme-secondary"
            type="color"
            value={themeData.colors.secondary || '#10b981'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('colors.secondary', (e.target as HTMLInputElement).value)}
            className="w-full p-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="theme-background">Background Color</Label>
          <Input
            id="theme-background"
            type="color"
            value={themeData.colors.background || '#ffffff'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('colors.background', (e.target as HTMLInputElement).value)}
            className="w-full p-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="theme-text">Text Color</Label>
          <Input
            id="theme-text"
            type="color"
            value={themeData.colors.text || '#333333'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('colors.text', (e.target as HTMLInputElement).value)}
            className="w-full p-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="theme-font">Font Family</Label>
          <Input
            id="theme-font"
            value={themeData.typography.fontFamily || 'Inter, sans-serif'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('typography.fontFamily', (e.target as HTMLInputElement).value)}
            className="w-full p-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="theme-font-size">Font Size</Label>
          <Input
            id="theme-font-size"
            value={themeData.typography.fontSize || '16px'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('typography.fontSize', (e.target as HTMLInputElement).value)}
            className="w-full p-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="theme-line-height">Line Height</Label>
          <Input
            id="theme-line-height"
            value={themeData.typography.lineHeight || '1.6'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('typography.lineHeight', (e.target as HTMLInputElement).value)}
            className="w-full p-2"
          />
        </div>
      </CardContent>
    </Card>
  );
};