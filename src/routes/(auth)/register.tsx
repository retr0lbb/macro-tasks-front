import { createFileRoute, Link } from "@tanstack/react-router";
import { RegisterForm } from "@/components/register-form";
import { Button } from "@/components/ui/button";
import { Chrome, Github } from "lucide-react";
import { TextSeparator } from "@/components/ui/text-separator";
import { Logo } from "@/assets/index";

export const Route = createFileRoute("/(auth)/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full min-h-dvh grid grid-cols-5">
      <div className="w-full h-full col-span-2 border-r flex justify-center items-center flex-col gap-2 relative">
        <Link
          to="/"
          className="flex items-center justify-center absolute top-2 left-2"
        >
          <img
            src={Logo}
            className="size-28"
            alt="A lot of dots connected by a string"
          />
        </Link>
        <div className="w-full px-20 py-2">
          <h1 className="text-zinc-100 text-5xl font-bold">Hello There!</h1>
          <p className="text-zinc-400">
            Welcome to your new simple way of managing large and complex
            projects
          </p>
        </div>

        <div className="py-4 flex w-full items-center justify-start gap-2 px-20">
          <Button variant={"outline"}>
            <Chrome /> Register with google
          </Button>
          <Button variant={"outline"}>
            <Github /> Register with Github
          </Button>
        </div>

        <TextSeparator
          className="px-28"
          color="bg-zinc-700"
          textColor="text-zinc-600"
          text="OR"
        />

        <div className="flex flex-col w-full px-28">
          <RegisterForm />
        </div>

        <span className="flex items-baseline gap-1">
          <p>Already have an account?</p>
          <Link to="/login" className="text-lg hover:underline">
            Login
          </Link>
        </span>
      </div>
      <div className="w-full h-full bg-zinc-900 col-span-3" />
    </div>
  );
}
