import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { UiGrid } from "@/components/ui-grid";
import { CopyFooter } from "@/components/copyright-footer";
import ForceGraph2D from "react-force-graph-2d";

export const Route = createFileRoute("/")({
  component: Index,
});

const graphData = {
  nodes: [
    { id: "My Vegas Trip 2026", group: 1, val: 12, color: "#ec4899" },
    { id: "Buy air plane tickets", group: 1, val: 5, color: "#f43f5e" },
    { id: "Get at least 10k", group: 1, val: 8, color: "#f43f5e" },
    { id: "Rent a big car", group: 1, val: 4, color: "#f43f5e" },
    { id: "Call Homies", group: 1, val: 4, color: "#f43f5e" },
    { id: "Call RBDLT", group: 1, val: 4, color: "#f43f5e" },
    { id: "Book hotel", group: 2, val: 5, color: "#22c55e" },
    { id: "Pack luggage", group: 2, val: 3, color: "#22c55e" },
    { id: "Plan activities", group: 2, val: 6, color: "#22c55e" },
    { id: "Buy travel insurance", group: 2, val: 2, color: "#22c55e" },
    { id: "Check passport", group: 2, val: 3, color: "#22c55e" },
  ],
  links: [
    // todas conectadas à viagem
    { source: "Buy air plane tickets", target: "My Vegas Trip 2026", value: 2 },
    { source: "Get at least 10k", target: "My Vegas Trip 2026", value: 2 },
    { source: "Rent a big car", target: "My Vegas Trip 2026", value: 2 },
    { source: "Call RBDLT", target: "My Vegas Trip 2026", value: 2 },
    { source: "Call Homies", target: "Call Homies", value: 2 },

    { source: "Book hotel", target: "My Vegas Trip 2026", value: 2 },
    { source: "Plan activities", target: "My Vegas Trip 2026", value: 2 },
    { source: "Buy travel insurance", target: "My Vegas Trip 2026", value: 2 },
    { source: "Check passport", target: "My Vegas Trip 2026", value: 2 },
    { source: "Pack luggage", target: "My Vegas Trip 2026", value: 2 },
  ],
};

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

      <div className="flex min-h-dvh max-w-dvw overflow-hidden">
        {/* Coluna do gráfico */}
        <div className="w-1/2 flex items-center justify-center">
          <ForceGraph2D
            width={window.innerWidth / 2}
            height={window.innerHeight}
            graphData={graphData}
            backgroundColor="transparent"
            nodeLabel="id"
            enableZoomInteraction={false}
            enablePanInteraction={false}
            dagMode="radialin"
            dagLevelDistance={60}
            enableNodeDrag={true}
            linkCanvasObjectMode={() => "after"}
            linkCanvasObject={(link: any, ctx: CanvasRenderingContext2D) => {
              const start = link.source as { x?: number; y?: number };
              const end = link.target as { x?: number; y?: number };
              if (
                typeof start.x !== "number" ||
                typeof start.y !== "number" ||
                typeof end.x !== "number" ||
                typeof end.y !== "number"
              )
                return;

              ctx.strokeStyle = "#94a3b8";
              ctx.lineWidth = 1.5;
              ctx.setLineDash([4, 4]);
              ctx.beginPath();
              ctx.moveTo(start.x, start.y);
              ctx.lineTo(end.x, end.y);
              ctx.stroke();
              ctx.setLineDash([]);
            }}
          />
        </div>

        <div className="w-1/2  flex items-center justify-center">
          <p className="text-white text-xl">Aqui vai o seu texto</p>
        </div>
      </div>

      <CopyFooter />
    </main>
  );
}
