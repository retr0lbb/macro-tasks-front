import { SideBarMenu } from "@/components/sidebar-menu";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full min-h-dvh bg-zinc-950 flex">
      <SideBarMenu />
      <Outlet />
    </div>
  );
}
