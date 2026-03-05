export interface CreatePageDto {
    siteId: string;
    slug: string;
    title: string;
    sections: Array<{
        type: string;
        props: any;
    }>;
}
