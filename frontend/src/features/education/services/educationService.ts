import { api } from "@/lib/api";

export const educationService = {
    async getEducations() {
        const response = await api.get("/educations");
        return response.data.data;
    },

    async createEducation(data: {
        institution: string;
        degree: string;
        field_of_study: string;
        description: string | null;
        start_date: string;
        end_date: string | null;
        is_current: boolean;
        display_order: number;
    }) {
        const response = await api.post("/educations", data);
        return response.data.data;
    },

    async updateEducation(
        id: number,
        data: {
            institution: string;
            degree: string;
            field_of_study: string;
            description: string | null;
            start_date: string;
            end_date: string | null;
            is_current: boolean;
            display_order: number;
        }
    ) {
        const response = await api.put(
            `/educations/${id}`,
            data
        );

        return response.data.data;
    },

    async deleteEducation(id: number) {
        await api.delete(`/educations/${id}`);
    },
};