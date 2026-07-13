import { api } from "@/lib/api";

export const socialLinkService = {

    async getSocialLinks() {

        const response = await api.get("/social-links");

        return response.data.data;

    },

    async createSocialLink(data: {

        platform: string;

        url: string;

        display_order: number;

    }) {

        const response = await api.post(

            "/social-links",

            data

        );

        return response.data.data;

    },

    async updateSocialLink(

        id: number,

        data: {

            platform: string;

            url: string;

            display_order: number;

        }

    ) {

        const response = await api.put(

            `/social-links/${id}`,

            data

        );

        return response.data.data;

    },

    async deleteSocialLink(id: number) {

        await api.delete(`/social-links/${id}`);

    },

};