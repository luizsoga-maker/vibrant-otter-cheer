import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export const MultilangPanel: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Multi-language</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Multi-language</Label>
          <p className="text-sm text-slate-500">Multi-language settings coming soon...</p>
        </div>
      </CardContent>
    </Card>
  );
};