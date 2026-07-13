import { api } from "@/lib/api";

export const experienceService = {

    async getExperiences() {

        const response = await api.get("/experiences");

        return response.data.data;

    },

    async createExperience(data: {

        company: string;

        position: string;

        location: string | null;

        description: string | null;

        start_date: string;

        end_date: string | null;

        is_current: boolean;

        display_order: number;

    }) {

        const response = await api.post(
            "/experiences",
            data
        );

        return response.data.data;

    },

    async updateExperience(

        id: number,

        data: {

            company: string;

            position: string;

            location: string | null;

            description: string | null;

            start_date: string;

            end_date: string | null;

            is_current: boolean;

            display_order: number;

        }

    ) {

        const response = await api.put(

            `/experiences/${id}`,

            data

        );

        return response.data.data;

    },

    async deleteExperience(id: number) {

        await api.delete(`/experiences/${id}`);

    },

};