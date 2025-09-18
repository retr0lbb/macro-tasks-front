import { useQuery } from "@tanstack/react-query";

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
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

      if(!BACKEND_URL){
        throw new Error("Could'nt read Env")
      }

      console.log(BACKEND_URL)

      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVhMjI3OWM2LWRiZTktNDA4Ni1hNWRlLTBhNzlmZjc1NTkwZiIsImlhdCI6MTc1ODE3MzE5NSwiZXhwIjoxNzU4MTczNzk1fQ.v0cOrSfs0aX-SsnOFZyw-pyB7WWfj4TVZ5TB7Tyikss"

      const response = await fetch(`${BACKEND_URL}/project`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`    
        }
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Request failed: ${response.status}`);
      }

      const data: GetProjectResponse = await response.json();
      return data.data;
    },
  });
}
