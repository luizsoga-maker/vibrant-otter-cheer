import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export const FormsPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Forms</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Forms</Label>
          <div className="space-y-2">
            <div className="p-3 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Contact Form</h4>
                <span className="text-sm text-slate-500">45 submissions</span>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-500">name (text, required)</div>
                <div className="text-xs text-slate-500">email (email, required)</div>
                <div className="text-xs text-slate-500">message (textarea, required)</div>
              </div>
            </div>
          </div>
          <Button variant="outline" className="w-full justify-start">
            Create New Form
          </Button>
        </div>

        <div className="space-y-2">
          <Label>Form Features</Label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Spam protection</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Email notifications</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Conditional logic</span>
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};