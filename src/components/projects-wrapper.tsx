import { useGetProjects } from "@/hooks/useGetProjects";

export function ProjectWrapper() {
  const { data, isPending } = useGetProjects();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!data?.data || data.data.length === 0) {
    return <div>No projects created yet</div>;
  }

  return (
    <div>
      {data.data.map((proj) => {
        return <div key={proj.id}>{proj.name}</div>;
      })}
    </div>
  );
}
