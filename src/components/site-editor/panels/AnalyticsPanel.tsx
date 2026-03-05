import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export const AnalyticsPanel: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Analytics</Label>
          <p className="text-sm text-slate-500">Analytics settings coming soon...</p>
        </div>
      </CardContent>
    </Card>
  );
};