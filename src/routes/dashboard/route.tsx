import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { SideBarMenu } from "@/components/sidebar-menu";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
  beforeLoad: () => {
    const token = sessionStorage.getItem("@HYPERBOLIC_TASKS:access_token");

    if (!token) {
      throw redirect({
        to: "/login",
      });
    }
  },
});

function RouteComponent() {
  return (
    <div className="w-full min-h-dvh bg-zinc-950 flex">
      <SideBarMenu />
      <Outlet />
    </div>
  );
}
