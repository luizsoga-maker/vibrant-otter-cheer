"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { useSiteEditor } from '../useSiteEditor';

export const MultilangPanel: React.FC = () => {
  const { currentPage, updatePage } = useSiteEditor();

  const multilangData = currentPage?.multilang || {
    enableMultilang: false,
    defaultLanguage: 'en',
    availableLanguages: ['en'],
  };

  const handleUpdate = (field: string, value: any) => {
    if (currentPage) {
      updatePage(currentPage.id, {
        multilang: { ...multilangData, [field]: value },
      });
    }
  };

  const addLanguage = () => {
    const lang = prompt('Enter language code (e.g., es, fr, de):');
    if (lang && multilangData.availableLanguages && !multilangData.availableLanguages.includes(lang)) {
      handleUpdate('availableLanguages', [...multilangData.availableLanguages, lang]);
    }
  };

  const removeLanguage = (lang: string) => {
    if (multilangData.availableLanguages) {
      handleUpdate(
        'availableLanguages',
        multilangData.availableLanguages.filter((l: string) => l !== lang)
      );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Multi-language</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="multilang-enable">Enable Multi-language</Label>
          <Switch
            id="multilang-enable"
            checked={multilangData.enableMultilang || false}
            onCheckedChange={(checked) => handleUpdate('enableMultilang', checked)}
          />
        </div>

        {multilangData.enableMultilang && (
          <>
            <div className="space-y-2">
              <Label htmlFor="multilang-default">Default Language</Label>
              <Input
                id="multilang-default"
                value={multilangData.defaultLanguage || 'en'}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('defaultLanguage', e.target.value)}
                placeholder="en"
              />
            </div>

            <div className="space-y-2">
              <Label>Available Languages</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {multilangData.availableLanguages?.map((lang: string) => (
                  <div
                    key={lang}
                    className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded"
                  >
                    <span className="text-sm">{lang}</span>
                    <button
                      onClick={() => removeLanguage(lang)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={addLanguage}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                + Add Language
              </button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};