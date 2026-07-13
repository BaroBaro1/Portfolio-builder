import { api } from "@/lib/api";

export const certificateService = {
    async getCertificates() {
        const response = await api.get("/certificates");
        return response.data.data;
    },

    async createCertificate(data: {
        title: string;
        issuer: string;
        issue_date: string;
        expiration_date: string | null;
        credential_url: string | null;
        image: string | null;
        display_order: number;
    }) {
        const response = await api.post(
            "/certificates",
            data
        );

        return response.data.data;
    },

    async updateCertificate(
        id: number,
        data: {
            title: string;
            issuer: string;
            issue_date: string;
            expiration_date: string | null;
            credential_url: string | null;
            image: string | null;
            display_order: number;
        }
    ) {
        const response = await api.put(
            `/certificates/${id}`,
            data
        );

        return response.data.data;
    },

    async deleteCertificate(id: number) {
        await api.delete(`/certificates/${id}`);
    },
};