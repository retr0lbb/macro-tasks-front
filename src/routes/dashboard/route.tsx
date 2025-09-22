import {
  createFileRoute,
  Outlet,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import { SideBarMenu } from "@/components/sidebar-menu";
import { useLogout } from "@/hooks/useLogout";

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
  const { mutateAsync: logout } = useLogout();
  const navigator = useNavigate();

  async function handleLogout() {
    console.log("func call");
    const result = await logout();
    console.log(result);

    navigator({ to: "/", replace: true });
  }

  return (
    <div className="w-full min-h-dvh bg-zinc-950 flex">
      <SideBarMenu useLogout={handleLogout} />
      <Outlet />
    </div>
  );
}
