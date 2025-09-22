import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { UiGrid } from "@/components/ui-grid";
import { CopyFooter } from "@/components/copyright-footer";
import { Graphs } from "@/components/graph";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CircleDashed } from "lucide-react";
import { getToken } from "@/lib/token";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    const token = getToken();

    if (token) {
      throw redirect({
        to: "/dashboard",
      });
    }
  },
  component: Index,
});

function Index() {
  return (
    <main className="w-full min-h-dvh flex flex-col">
      <div className="min-h-dvh flex flex-col items-center justify-center">
        <div className="w-full flex shrink-0 flex-col items-center justify-center my-4">
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <h1 className="text-7xl text-zinc-100 font-bold italic">
              Hyperbolic Tasks
            </h1>
            <p className="text-2xl font-light text-zinc-300">
              The one and only todo-list with almost infinity subtasks for each
              task.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-6">
          <p className="text-center max-w-[700px] text-zinc-500 font-normal">
            Our mission is to boost your productivity by givin to you a simple
            and ultra efficient platform of tasks control, in the future we
            would like to implement an desktop and a Android app and functions
            like: team workspaces, assign task to person and due date
          </p>
          <div className="w-full flex items-center justify-center gap-8">
            <Link to="/login">
              <Button variant="outline" size="lg">
                Sign-in
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="default" size="lg">
                Sign-up now
              </Button>
            </Link>
          </div>
        </div>
        <UiGrid cellSize={64} color="255,255,255,0.08" className="" />
      </div>

      <div className="flex min-h-dvh max-w-dvw overflow-hidden py-4">
        {/* Coluna do gráfico */}
        <div className="w-1/2 flex items-center justify-center p-5">
          <Tabs defaultValue="graph">
            <TabsList>
              <TabsTrigger value="graph">Graph</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
            </TabsList>
            <TabsContent value="graph">
              <Graphs />
            </TabsContent>
            <TabsContent value="list">
              <ul className="w-[600px] h-[600px] bg-zinc-900 border border-zinc-700 rounded-2xl px-5 flex flex-col justify-around">
                <li className="flex items-center justify-start gap-2 border border-zinc-500 py-4 px-6 rounded-lg">
                  <CircleDashed /> Plan New York trip
                </li>
                <li className="flex items-center justify-start gap-2 border border-zinc-500 py-4 px-6 rounded-lg">
                  <CircleDashed /> Buy Car
                </li>
                <li className="flex items-center justify-start gap-2 border border-zinc-500 py-4 px-6 rounded-lg">
                  <CircleDashed /> Buy Plane passes
                </li>
                <li className="flex items-center justify-start gap-2 border border-zinc-500 py-4 px-6 rounded-lg">
                  <CircleDashed /> Get a good camera
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>

        <div className="w-1/2 flex-col flex items-center justify-start pt-36 gap-6">
          <h1 className="text-5xl">
            <strong>Organize</strong> your plans
          </h1>
          <p className="text-white text-lg max-w-[500px]">
            Our software organizes your tasks visually, making it easy to plan,
            track, and manage your projects with clarity and efficiency.
          </p>

          <p className="text-white text-lg max-w-[500px]">
            We have a lot of ways to organize the tasks if you don't like the
            graph view !!!
          </p>

          <div className="flex flex-1 items-center justify-center">
            <Link to="/register">
              <Button>Register now!</Button>
            </Link>
          </div>
        </div>
      </div>

      <CopyFooter />
    </main>
  );
}
