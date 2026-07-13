export interface Experience {
    id: number;

    company: string;

    position: string;

    location: string | null;

    description: string | null;

    start_date: string;

    end_date: string | null;

    is_current: boolean;

    display_order: number;

    created_at: string;

    updated_at: string;
}