"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { useSiteEditor } from '../useSiteEditor';

export const BlogPanel: React.FC = () => {
  const { currentPage, updatePage } = useSiteEditor();

  const blogData = currentPage?.blog || {
    enableBlog: false,
    postsPerPage: 10,
    showAuthor: true,
    showDate: true,
    showCategories: true,
    enableComments: false,
  };

  const handleUpdate = (field: string, value: any) => {
    if (currentPage) {
      updatePage(currentPage.id, {
        blog: { ...blogData, [field]: value },
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Blog Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="blog-enable">Enable Blog</Label>
          <Switch
            id="blog-enable"
            checked={blogData.enableBlog || false}
            onCheckedChange={(checked) => handleUpdate('enableBlog', checked)}
          />
        </div>

        {blogData.enableBlog && (
          <>
            <div className="space-y-2">
              <Label htmlFor="blog-postsPerPage">Posts Per Page</Label>
              <Input
                id="blog-postsPerPage"
                type="number"
                min="1"
                max="50"
                value={blogData.postsPerPage || 10}
                onChange={(e) => handleUpdate('postsPerPage', parseInt(e.target.value) || 10)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="blog-showAuthor">Show Author</Label>
              <Switch
                id="blog-showAuthor"
                checked={blogData.showAuthor || false}
                onCheckedChange={(checked) => handleUpdate('showAuthor', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="blog-showDate">Show Date</Label>
              <Switch
                id="blog-showDate"
                checked={blogData.showDate || false}
                onCheckedChange={(checked) => handleUpdate('showDate', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="blog-showCategories">Show Categories</Label>
              <Switch
                id="blog-showCategories"
                checked={blogData.showCategories || false}
                onCheckedChange={(checked) => handleUpdate('showCategories', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="blog-enableComments">Enable Comments</Label>
              <Switch
                id="blog-enableComments"
                checked={blogData.enableComments || false}
                onCheckedChange={(checked) => handleUpdate('enableComments', checked)}
              />
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};