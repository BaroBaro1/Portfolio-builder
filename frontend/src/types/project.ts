export interface Project {
    id: number;

    title: string;

    slug: string;

    description: string;

    thumbnail: string | null;

    github_url: string | null;

    live_url: string | null;

    featured: boolean;

    status: "draft" | "published";

    display_order: number;

    published_at: string | null;

    created_at: string;

    updated_at: string;
}