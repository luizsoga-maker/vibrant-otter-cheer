import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export const AnalyticsPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Advanced Analytics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Analytics</Label>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span className="text-sm">Enable analytics</span>
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Analytics Providers</Label>
          <div className="space-y-2">
            <div className="flex gap-2">
              <Label className="text-sm">Google Analytics</Label>
              <input
                type="text"
                placeholder="UA-XXXXXXXXX-X"
                className="flex-1 p-2 border border-slate-200 rounded text-sm"
              />
            </div>
            <div className="flex gap-2">
              <Label className="text-sm">Facebook Pixel</Label>
              <input
                type="text"
                placeholder="XXXXXXXXXX"
                className="flex-1 p-2 border border-slate-200 rounded text-sm"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Goals & Conversions</Label>
          <div className="space-y-2">
            <div className="p-2 border rounded">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium">Contact Form Submission</p>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Conversion</span>
              </div>
              <p className="text-xs text-slate-500">Value: $100</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Add Goal
          </Button>
        </div>

        <div className="space-y-2">
          <Label>Custom Reports</Label>
          <div className="space-y-2">
            <div className="p-2 border rounded">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Traffic Overview</p>
                <span className="text-xs bg-slate-100 px-2 py-1 rounded">Standard</span>
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Create Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};