import { useGetProjects } from "@/hooks/useGetProjects";

export function ProjectWrapper() {
  const { data, isPending } = useGetProjects();

  if (isPending) {
    return <div>...</div>;
  }

  return (
    <div>
      {data &&
        data.map((proj) => {
          return <div key={proj.id}>{proj.name}</div>;
        })}
    </div>
  );
}
