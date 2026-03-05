export interface UpdateSiteDto {
  name?: string;
  slug?: string;
  theme?: {
    colors?: {
      primary?: string;
      secondary?: string;
      background?: string;
      text?: string;
    };
    typography?: {
      fontFamily?: string;
      fontSize?: string;
      lineHeight?: string;
    };
  };
  domain?: string;
}