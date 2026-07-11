import { api } from "@/lib/api";

export const profileService = {
  async getProfile() {
    const response = await api.get("/profile");

    return response.data.data;
  },

  async updateProfile(data: FormData) {
    const response = await api.post(
      "/profile?_method=PUT",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data.data;
  },
  async deleteAvatar() {
  return api.delete("/profile/avatar");
},
};