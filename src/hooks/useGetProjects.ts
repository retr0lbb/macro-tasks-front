import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

interface GetProjectResponse {
  data: {
    _count: { tasks: number };
    name: string;
    description: string;
    id: string;
  }[]
}

export function useGetProjects() {
   return useQuery({
    queryKey: ["get-projects"],
    queryFn: async () => {

      const response = await api.get(`/project`);

      if (response.status !== 200) {
        throw new Error(response.data.message || `Request failed: ${response.status}`);
      }

      const data: AxiosResponse<GetProjectResponse> = response.data
      
      return data.data;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}
