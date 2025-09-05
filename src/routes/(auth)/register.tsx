import { createFileRoute } from "@tanstack/react-router";
import { RegisterForm } from "@/components/register-form";

export const Route = createFileRoute("/(auth)/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full min-h-dvh grid grid-cols-5">
      <div className="w-full h-full col-span-2 border-r flex justify-center items-center">
        <div className="flex flex-col min-w-96">
          <RegisterForm />
        </div>
      </div>
      <div className="w-full h-full bg-slate-950 col-span-3" />
    </div>
  );
}
