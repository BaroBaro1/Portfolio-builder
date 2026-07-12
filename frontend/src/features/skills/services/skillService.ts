import { api } from "@/lib/api";

export const skillService = {

    async getSkills() {

        const response = await api.get("/skills");

        return response.data.data;

    },

    async getCatalog() {

        const response = await api.get("/skills/catalog");

        return response.data.data;

    },

    async createSkill(data: {

        skill_id: number;

        level: number;

    }) {

        const response = await api.post(
            "/skills",
            data
        );

        return response.data.data;

    },

    async updateSkill(

        id: number,

        data: {

            level: number;

        }

    ) {

        const response = await api.put(

            `/skills/${id}`,

            data

        );

        return response.data.data;

    },

    async deleteSkill(id: number) {

        await api.delete(`/skills/${id}`);

    },

};