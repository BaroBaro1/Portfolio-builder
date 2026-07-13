export interface Education {
    id: number;

    institution: string;

    degree: string;

    field_of_study: string;

    description: string | null;

    start_date: string;

    end_date: string | null;

    is_current: boolean;

    display_order: number;

    created_at: string;

    updated_at: string;
}