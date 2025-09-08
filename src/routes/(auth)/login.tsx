import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Chrome, Github, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/(auth)/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="min-h-dvh overflow-hidden grid grid-cols-5 place-items-center">
      <div className="w-full h-full p-5 col-span-2 bg-violet-700 relative">
        <div className="absolute top-10 left-10 p-2 flex items-center justify-center text-zinc-300">
          <Link to="/" className="flex items-center justify-center gap-2">
            <ArrowLeft /> Voltar
          </Link>
        </div>
        <Card className="w-full h-full flex flex-col justify-center px-10">
          <CardHeader className="flex flex-col gap-2">
            <CardTitle>
              <h1 className="text-4xl font-bold text-zinc-200">Login</h1>
            </CardTitle>
            <CardAction className="flex items-center justify-center gap-1 text-zinc-400">
              Não tem uma conta?{" "}
              <Link
                to="/register"
                className="text-lg underline cursor-pointer hover:text-zinc-200"
              >
                Cadastre-se
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <LoginForm />
            <Separator className="mt-5 mb-1" />
          </CardContent>
          <CardFooter className="flex gap-2 items-center">
            <Button variant={"outline"}>
              <Chrome /> Login com Google
            </Button>
            <Separator orientation="vertical" />
            <Button variant={"outline"}>
              <Github /> Login com Github
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="bg-violet-700 w-full h-full col-span-3"></div>
    </main>
  );
}
