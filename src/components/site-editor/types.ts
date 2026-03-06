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
    },
  };
  pages: Page[];
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  sections: Section[];
  // Added missing properties
  theme?: {
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
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
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

// Added missing state types
export interface CDNState {
  // Empty for now - can be extended later
}

export interface DeploymentState {
  // Empty for now - can be extended later
}