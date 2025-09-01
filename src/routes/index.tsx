import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { UiGrid } from "@/components/ui-grid";
import { CopyFooter } from "@/components/copyright-footer";

export const Route = createFileRoute("/")({
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
            <Link to="/">
              <Button variant="default" size="lg">
                Sign-up now
              </Button>
            </Link>
          </div>
        </div>
        <UiGrid cellSize={64} color="255,255,255,0.08" className="" />
      </div>

      <div className="min-h-dvh "></div>

      <CopyFooter />
    </main>
  );
}
