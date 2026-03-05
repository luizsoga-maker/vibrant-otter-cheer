import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export const FormsPanel: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Forms</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Forms</Label>
          <p className="text-sm text-slate-500">Form settings coming soon...</p>
        </div>
      </CardContent>
    </Card>
  );
};