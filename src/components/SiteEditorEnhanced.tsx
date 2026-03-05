// Add site CDN state
const [siteCDN, setSiteCDN] = useState({
  provider: 'Cloudflare' as 'Cloudflare' | 'AWS CloudFront' | 'Fastly' | 'Akamai',
  status: 'active' as 'active' | 'pending' | 'error',
  cacheHitRate: '92%',
  edgeLocations: 200,
  dataTransfer: '15GB',
});

// Add site CDN panel
<div className="space-y-4">
  <div className="space-y-2">
    <Label>Site CDN</Label>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-3 border rounded-lg">
        <div className="text-2xl font-bold text-blue-600 mb-1">
          {siteCDN.provider}
        </div>
        <div className="text-sm text-slate-500">Provider</div>
      </div>
      <div className="p-3 border rounded-lg">
        <div className="text-2xl font-bold text-green-600 mb-1">
          {siteCDN.status === 'active' ? '✓' : '✗'}
        </div>
        <div className="text-sm text-slate-500">
          {siteCDN.status === 'active' ? 'Active' : siteCDN.status === 'pending' ? 'Pending' : 'Error'}
        </div>
      </div>
      <div className="p-3 border rounded-lg">
        <div className="text-2xl font-bold text-purple-600 mb-1">{siteCDN.cacheHitRate}</div>
        <div className="text-sm text-slate-500">Cache Hit Rate</div>
      </div>
      <div className="p-3 border rounded-lg">
        <div className="text-2xl font-bold text-orange-600 mb-1">{siteCDN.edgeLocations}</div>
        <div className="text-sm text-slate-500">Edge Locations</div>
      </div>
    </div>
  </div>

  <div className="space-y-2">
    <Label>CDN Performance</Label>
    <div className="space-y-2">
      <div className="flex items-center justify-between p-2 border rounded">
        <span className="text-sm">Data Transfer</span>
        <span className="text-sm font-medium">{siteCDN.dataTransfer}</span>
      </div>
      <div className="flex items-center justify-between p-2 border rounded">
        <span className="text-sm">Cache Hit Rate</span>
        <div className="flex-1 bg-slate-200 rounded-full h-2 ml-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: siteCDN.cacheHitRate }}></div>
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
        <Aws className="h-4 w-4 mr-2" />
        AWS CloudFront
      </Button>
      <Button
        variant="outline"
        className="w-full justify-start"
        onClick={() => window.open('https://www.fastly.com/', '_blank')}
      >
        <Fastly className="h-4 w-4 mr-2" />
        Fastly
      </Button>
      <Button
        variant="outline"
        className="w-full justify-start"
        onClick={() => window.open('https://www.akamai.com/', '_blank')}
      >
        <Akamai className="h-4 w-4 mr-2" />
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
          checked={true} // Always enabled
          disabled
          className="mr-2"
        />
        <span className="text-sm">Automatic cache purging</span>
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={true} // Always enabled
          disabled
          className="mr-2"
        />
        <span className="text-sm">SSL/TLS encryption</span>
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={true} // Always enabled
          disabled
          className="mr-2"
        />
        <span className="text-sm">DDoS protection</span>
      </label>
    </div>
  </div>
</div>