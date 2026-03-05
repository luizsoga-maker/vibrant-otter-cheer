export interface UpdatePageDto {
  title?: string;
  sections?: Array<{
    type: string;
    props: any;
  }>;
}