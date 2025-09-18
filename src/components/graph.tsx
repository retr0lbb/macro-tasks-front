/** biome-ignore-all lint/style/noNonNullAssertion: <no need> */
import ForceGraph2D from "react-force-graph-2d";
import { graphData } from "@/lib/gen-data";

export function Graphs() {
  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-400/20">
      <ForceGraph2D
        width={600}
        height={600}
        graphData={graphData}
        backgroundColor="transparent"
        nodeLabel="id"
        autoPauseRedraw
        dagMode="radialin"
        enableZoomInteraction={false}
        enablePanInteraction={false}
        dagLevelDistance={40}
        enableNodeDrag={true}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const size = 16 / globalScale;
          const label = node.id as string;

          ctx.beginPath();
          ctx.arc(node.x!, node.y!, size, 0, 2 * Math.PI);
          ctx.fillStyle = "#1e293b";
          ctx.fill();
          ctx.strokeStyle = "#94a3b8";
          ctx.lineWidth = 2;
          ctx.stroke();

          // Escrever texto dentro
          ctx.font = `${12 / globalScale}px Sans-Serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#fff";
          ctx.fillText(label[0], node.x!, node.y!);
        }}
        linkCanvasObjectMode={() => "after"}
        linkCanvasObject={(link, ctx: CanvasRenderingContext2D) => {
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
  );
}
