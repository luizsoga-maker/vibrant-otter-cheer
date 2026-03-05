import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export const CachingPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Caching</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Caching</Label>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span className="text-sm">Enable caching</span>
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Cache Strategy</Label>
          <select className="w-full p-2 border border-slate-200 rounded-md">
            <option>Aggressive (max performance)</option>
            <option>Balanced (recommended)</option>
            <option>Conservative (fresh content)</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label>Cache TTL (seconds)</Label>
          <input
            type="number"
            defaultValue={3600}
            className="w-full p-2 border border-slate-200 rounded-md"
          />
        </div>

        <div className="space-y-2">
          <Label>Caching Options</Label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span className="text-sm">Edge caching (CDN)</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span className="text-sm">Browser caching</span>
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Cache Statistics</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">94%</div>
              <div className="text-sm text-slate-500">Hit Rate</div>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">12ms</div>
              <div className="text-sm text-slate-500">Avg. Response</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};