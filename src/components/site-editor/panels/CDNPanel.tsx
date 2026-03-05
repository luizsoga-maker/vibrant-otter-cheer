import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Cloud, Server, Zap, Globe } from 'lucide-react';

interface CDNPanelProps {
  provider?: string;
  status?: string;
  cacheHitRate?: string;
  dataTransfer?: string;
}

export const CDNPanel: React.FC<CDNPanelProps> = ({
  provider = 'Cloudflare',
  status = 'active',
  cacheHitRate = '92%',
  dataTransfer = '15GB',
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>CDN</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Site CDN</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">{provider}</div>
              <div className="text-sm text-slate-500">Provider</div>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {status === 'active' ? '✓' : '✗'}
              </div>
              <div className="text-sm text-slate-500">
                {status === 'active' ? 'Active' : status === 'pending' ? 'Pending' : 'Error'}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>CDN Performance</Label>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 border rounded">
              <span className="text-sm">Data Transfer</span>
              <span className="text-sm font-medium">{dataTransfer}</span>
            </div>
            <div className="flex items-center justify-between p-2 border rounded">
              <span className="text-sm">Cache Hit Rate</span>
              <div className="flex-1 bg-slate-200 rounded-full h-2 ml-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: cacheHitRate }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Available CDN Providers</Label>
          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => window.open('https://www.cloudflare.com/', '_blank')}
            >
              <Cloud className="h-4 w-4 mr-2" />
              Cloudflare
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => window.open('https://aws.amazon.com/cloudfront/', '_blank')}
            >
              <Server className="h-4 w-4 mr-2" />
              AWS CloudFront
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => window.open('https://www.fastly.com/', '_blank')}
            >
              <Zap className="h-4 w-4 mr-2" />
              Fastly
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => window.open('https://www.akamai.com/', '_blank')}
            >
              <Globe className="h-4 w-4 mr-2" />
              Akamai
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>CDN Settings</Label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="mr-2"
              />
              <span className="text-sm">Automatic cache purging</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="mr-2"
              />
              <span className="text-sm">SSL/TLS encryption</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="mr-2"
              />
              <span className="text-sm">DDoS protection</span>
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};