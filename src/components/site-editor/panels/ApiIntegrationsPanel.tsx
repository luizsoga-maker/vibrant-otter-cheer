"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { useSiteEditor } from '../useSiteEditor';

export const ApiIntegrationsPanel: React.FC = () => {
  const { currentPage, updatePage } = useSiteEditor();

  const apiData = currentPage?.apiIntegrations || {
    enableApi: false,
    endpoints: [],
    webhookUrl: '',
    apiKey: '',
  };

  const handleUpdate = (field: string, value: any) => {
    if (currentPage) {
      updatePage(currentPage.id, {
        apiIntegrations: { ...apiData, [field]: value },
      });
    }
  };

  const addEndpoint = () => {
    const name = prompt('Endpoint name (e.g., Get Users):');
    const url = prompt('Endpoint URL:');
    const method = prompt('HTTP Method (GET, POST, PUT, DELETE):', 'GET');
    
    if (name && url && method) {
      handleUpdate('endpoints', [
        ...(apiData.endpoints || []),
        { id: Date.now().toString(), name, url, method: method.toUpperCase() },
      ]);
    }
  };

  const removeEndpoint = (id: string) => {
    handleUpdate(
      'endpoints',
      apiData.endpoints?.filter((ep: any) => ep.id !== id) || []
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Integrations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="api-enable">Enable API Access</Label>
          <Switch
            id="api-enable"
            checked={apiData.enableApi || false}
            onCheckedChange={(checked) => handleUpdate('enableApi', checked)}
          />
        </div>

        {apiData.enableApi && (
          <>
            <div className="space-y-2">
              <Label htmlFor="api-key">API Key</Label>
              <Input
                id="api-key"
                type="password"
                value={apiData.apiKey || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('apiKey', e.target.value)}
                placeholder="your-api-key"
              />
              <p className="text-xs text-slate-500">
                API key for external services to access your data
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="api-webhook">Webhook URL</Label>
              <Input
                id="api-webhook"
                value={apiData.webhookUrl || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate('webhookUrl', e.target.value)}
                placeholder="https://your-server.com/webhook"
              />
              <p className="text-xs text-slate-500">
                URL to send notifications when data changes
              </p>
            </div>

            <div className="space-y-2">
              <Label>Custom Endpoints</Label>
              <div className="space-y-2">
                {apiData.endpoints?.map((ep: any) => (
                  <div
                    key={ep.id}
                    className="flex items-center justify-between p-2 border rounded"
                  >
                    <div>
                      <span className="text-sm font-medium">{ep.name}</span>
                      <span className="text-xs text-slate-500 ml-2">
                        {ep.method} {ep.url}
                      </span>
                    </div>
                    <button
                      onClick={() => removeEndpoint(ep.id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={addEndpoint}
                className="w-full"
              >
                + Add Endpoint
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};