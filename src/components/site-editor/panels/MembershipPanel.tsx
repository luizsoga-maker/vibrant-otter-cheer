import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export const MembershipPanel: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Membership</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Membership</Label>
          <p className="text-sm text-slate-500">Membership settings coming soon...</p>
        </div>
      </CardContent>
    </Card>
  );
};