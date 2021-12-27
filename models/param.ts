export interface Params {
    id?: number;
    title?: string;
    slug?: string;
    created_at?: string;
    updated_at?: string;
    topics?: number;
    topics__name?: string;
    topics__slug?: string;
    tags?: number;
    tag__name?: string;
    author?: string;
    page?: number;
    ordering?: string;
    page_size?: number;
    search?: string;
    name?: string;
}
