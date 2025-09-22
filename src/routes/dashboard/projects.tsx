import { ProjectCard } from "@/components/project-card";
import { useGetProjects } from "@/hooks/useGetProjects";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isPending, data, isError, error } = useGetProjects();

  if (isPending) {
    return "Loading ... ";
  }

  if (isError) {
    return error.message;
  }

  return (
    <div className="">
      {data.data.map((project) => (
        <ProjectCard key={project.id}>
          <ProjectCard.Header
            numberOfTasks={project._count.tasks}
            portraitUrl="10"
          >
            {project.name}
          </ProjectCard.Header>
          {project.description && (
            <ProjectCard.Description>
              {project.description}
            </ProjectCard.Description>
          )}
        </ProjectCard>
      ))}
    </div>
  );
}
