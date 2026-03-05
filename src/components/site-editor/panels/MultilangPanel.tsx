import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export const MultilangPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Multi-language</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Multi-language</Label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Enable multi-language</span>
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Languages</Label>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 border rounded">
              <div className="flex items-center gap-2">
                <span className="text-xl">🇺🇸</span>
                <div>
                  <p className="text-sm font-medium">English</p>
                  <p className="text-xs text-slate-500">en</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Default</span>
            </div>
            <div className="flex items-center justify-between p-2 border rounded">
              <div className="flex items-center gap-2">
                <span className="text-xl">🇪🇸</span>
                <div>
                  <p className="text-sm font-medium">Spanish</p>
                  <p className="text-xs text-slate-500">es</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">Remove</Button>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Add Language
          </Button>
        </div>

        <div className="space-y-2">
          <Label>Language Switcher</Label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Show language selector</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Auto-detect user language</span>
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};