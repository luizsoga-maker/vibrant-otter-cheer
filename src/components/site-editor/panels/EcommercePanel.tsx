import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export const EcommercePanel: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>E-commerce</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>E-commerce</Label>
          <p className="text-sm text-slate-500">E-commerce settings coming soon...</p>
        </div>
      </CardContent>
    </Card>
  );
};