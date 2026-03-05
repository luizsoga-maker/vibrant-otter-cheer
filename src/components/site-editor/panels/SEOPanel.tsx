import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const SEOPanel = () => {
  const [schemaType, setSchemaType] = useState('Organization');
  const [schemaData, setSchemaData] = useState({
    name: '',
    description: '',
    url: '',
    logo: '',
  });

  const generateSchema = () => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      ...schemaData,
    };
    console.log('Generated schema:', JSON.stringify(schema, null, 2));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>SEO Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Schema.org Type</Label>
          <select
            value={schemaType}
            onChange={(e) => setSchemaType(e.target.value)}
            className="w-full p-2 border border-slate-200 rounded-md"
          >
            <option>Organization</option>
            <option>Person</option>
            <option>LocalBusiness</option>
            <option>WebSite</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label>Schema.org Data</Label>
          <div className="space-y-2">
            <Input
              value={schemaData.name}
              onChange={(e) => setSchemaData({ ...schemaData, name: e.target.value })}
              placeholder="Organization name"
            />
            <Textarea
              value={schemaData.description}
              onChange={(e) => setSchemaData({ ...schemaData, description: e.target.value })}
              placeholder="Description"
              rows={3}
            />
            <Input
              value={schemaData.url}
              onChange={(e) => setSchemaData({ ...schemaData, url: e.target.value })}
              placeholder="URL"
            />
            <Input
              value={schemaData.logo}
              onChange={(e) => setSchemaData({ ...schemaData, logo: e.target.value })}
              placeholder="Logo URL"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Page SEO</Label>
          <div className="space-y-2">
            <div>
              <Label>Meta Title</Label>
              <Input placeholder="Page title for search engines" maxLength={60} />
              <p className="text-xs text-slate-500">0/60 characters</p>
            </div>
            <div>
              <Label>Meta Description</Label>
              <Textarea placeholder="Brief description for search engines" rows={3} maxLength={160} />
              <p className="text-xs text-slate-500">0/160 characters</p>
            </div>
          </div>
        </div>

        <Button onClick={generateSchema} size="sm">
          Generate Schema Markup
        </Button>
      </CardContent>
    </Card>
  );
};