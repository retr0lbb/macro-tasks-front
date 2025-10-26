import { ProjectWrapper } from "@/components/projects-wrapper";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ProjectWrapper />
    </div>
  );
}
