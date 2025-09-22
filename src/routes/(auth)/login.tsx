import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Chrome, Github } from "lucide-react";
import { Logo } from "@/assets";
import { Graphs } from "@/components/graph";
export const Route = createFileRoute("/(auth)/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="min-h-dvh overflow-hidden grid grid-cols-5 place-items-center">
      <div className="w-full h-full p-5 col-span-2 bg-zinc-950 relative">
        <Link
          to="/"
          className="flex items-center justify-center absolute top-4 left-4"
        >
          <img
            src={Logo}
            className="size-28"
            alt="A lot of dots connected by a string"
          />
        </Link>
        <Card className="w-full h-full flex flex-col justify-center px-10">
          <CardHeader className="flex flex-col gap-2">
            <CardTitle>
              <h1 className="text-5xl font-bold text-zinc-200">
                Welcome Back!
              </h1>
            </CardTitle>

            <CardDescription className="pb-2">
              We missed you so much use your email and password to enter again
              and access this platform.
            </CardDescription>

            <CardAction className="flex items-center justify-center gap-1 text-zinc-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-lg underline cursor-pointer hover:text-zinc-200"
              >
                Sing-up
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <LoginForm />
            <Separator className="mt-5 mb-1" />
          </CardContent>
          <CardFooter className="flex gap-2 items-center">
            <Button variant={"outline"}>
              <Chrome /> sign-in with Google
            </Button>
            <Separator orientation="vertical" />
            <Button variant={"outline"}>
              <Github /> sign-in with Github
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="bg-zinc-950 w-full h-full col-span-3 flex items-center justify-center">
        <Graphs />
      </div>
    </main>
  );
}
