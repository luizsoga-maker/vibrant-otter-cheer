import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export const BlogPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Blog</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Blog</Label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Enable blog</span>
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Blog Posts</Label>
          <div className="space-y-2">
            <div className="p-3 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium">Getting Started</p>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Published</span>
              </div>
              <p className="text-xs text-slate-500">123 views</p>
            </div>
          </div>
          <Button variant="outline" className="w-full justify-start">
            Write New Post
          </Button>
        </div>

        <div className="space-y-2">
          <Label>Blog Settings</Label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Enable comments</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Enable RSS feed</span>
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};