import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export const ApiIntegrationsPanel: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>API Integrations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>API Integrations</Label>
          <p className="text-sm text-slate-500">API integration settings coming soon...</p>
        </div>
      </CardContent>
    </Card>
  );
};