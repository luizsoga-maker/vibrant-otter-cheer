export interface Site {
  id: string;
  name: string;
  slug: string;
  theme: {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    typography: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
    };
  };
  pages: Page[];
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  sections: Section[];
}

export interface Section {
  id: string;
  type: string;
  props: Record<string, any>;
}

export interface CDNState {
  provider: 'Cloudflare' | 'AWS CloudFront' | 'Fastly' | 'Akamai';
  status: 'active' | 'pending' | 'error';
  cacheHitRate: string;
  edgeLocations: number;
  dataTransfer: string;
}

export interface DeploymentState {
  status: 'idle' | 'deploying' | 'completed' | 'failed';
  progress: number;
  target: 'production' | 'staging' | 'development';
}