import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export const ApiIntegrationsPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>API Integrations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Webhooks</Label>
          <div className="space-y-2">
            <div className="p-3 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium truncate">https://api.example.com/webhooks/site-published</p>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span>
              </div>
              <div className="flex gap-1">
                <span className="text-xs bg-slate-100 px-2 py-1 rounded">site.published</span>
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Add Webhook
          </Button>
        </div>

        <div className="space-y-2">
          <Label>API Keys</Label>
          <div className="space-y-2">
            <div className="flex gap-2">
              <Label className="text-sm">Stripe</Label>
              <input
                type="password"
                placeholder="sk_live_..."
                className="flex-1 p-2 border border-slate-200 rounded text-sm"
              />
            </div>
            <div className="flex gap-2">
              <Label className="text-sm">SendGrid</Label>
              <input
                type="password"
                placeholder="SG..."
                className="flex-1 p-2 border border-slate-200 rounded text-sm"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>API Documentation</Label>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start" size="sm">
              View API Docs
            </Button>
            <Button variant="outline" className="w-full justify-start" size="sm">
              API Playground
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};