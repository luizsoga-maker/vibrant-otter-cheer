import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export const CDNPanel: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>CDN</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>CDN Settings</Label>
          <p className="text-sm text-slate-500">CDN configuration coming soon...</p>
        </div>
      </CardContent>
    </Card>
  );
};