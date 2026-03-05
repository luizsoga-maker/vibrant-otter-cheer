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
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    canonicalUrl?: string;
    noIndex?: boolean;
  };
  analytics?: {
    googleAnalyticsId?: string;
    googleTagManagerId?: string;
    facebookPixelId?: string;
    customScripts?: string;
  };
  forms?: {
    enableContactForm?: boolean;
    contactEmail?: string;
    formspreeId?: string;
    recaptchaSiteKey?: string;
    recaptchaSecretKey?: string;
    successMessage?: string;
  };
  blog?: {
    enableBlog?: boolean;
    postsPerPage?: number;
    showAuthor?: boolean;
    showDate?: boolean;
    showCategories?: boolean;
    enableComments?: boolean;
  };
  multilang?: {
    enableMultilang?: boolean;
    defaultLanguage?: string;
    availableLanguages?: string[];
  };
  caching?: {
    enableCache?: boolean;
    cacheTtl?: number;
    cacheStrategy?: string;
    cacheTags?: string[];
  };
  apiIntegrations?: {
    enableApi?: boolean;
    endpoints?: Array<{
      id: string;
      name: string;
      url: string;
      method: string;
    }>;
    webhookUrl?: string;
    apiKey?: string;
  };
  collaboration?: {
    collaborators?: Array<{
      email: string;
      role: string;
      addedAt: string;
    }>;
  };
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