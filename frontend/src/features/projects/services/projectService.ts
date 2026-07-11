import { api } from "@/lib/api";

export const projectService = {

    async getProjects() {
        const response = await api.get("/projects");
        return response.data.data;
    },

    async createProject(formData: FormData) {
        const response = await api.post(
            "/projects",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        return response.data.data;
    },

    async updateProject(
        id: number,
        formData: FormData
    ) {

        const response = await api.post(
            `/projects/${id}?_method=PUT`,
            formData,
            {
                headers: {
                    "Content-Type":
                        "multipart/form-data",
                },
            }
        );

        return response.data.data;
    },

    async deleteProject(id: number) {

        await api.delete(`/projects/${id}`);

    },

};