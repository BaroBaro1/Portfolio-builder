export interface Certificate {
    id: number;

    title: string;

    issuer: string;

    issue_date: string;

    expiration_date: string | null;

    credential_url: string | null;

    image: string | null;

    display_order: number;

    created_at: string;

    updated_at: string;
}