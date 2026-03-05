import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export const EcommercePanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>E-commerce</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>E-commerce</Label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Enable e-commerce</span>
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Store Statistics</Label>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">0</div>
              <div className="text-sm text-slate-500">Products</div>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">0</div>
              <div className="text-sm text-slate-500">Orders</div>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">$0.00</div>
              <div className="text-sm text-slate-500">Revenue</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>E-commerce Features</Label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Shipping & Tax</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Inventory Management</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Order Management</span>
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};