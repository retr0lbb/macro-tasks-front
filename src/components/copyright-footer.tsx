import { Linkedin, Globe } from "lucide-react";

export function CopyFooter() {
  return (
    <footer className="w-full bg-zinc-900 p-2 grid grid-cols-3 place-items-center">
      <div />
      <div>
        <a
          href="https://github.com/retr0lbb"
          target="blank"
          className="text-sm font-thin text-zinc-300 hover:underline transition-all cursor-pointer"
        >
          Copyright 2025© retr0lbb
        </a>
      </div>
      <div className="flex items-center justify-end gap-2 font-thin text-zinc-500 w-full h-full px-10">
        <a
          href="https://www.linkedin.com/in/henrique-barbosa-sampaio/"
          target="blank"
          className="hover:text-zinc-300 transition-all cursor-pointer p-2 grid place-items-center"
        >
          <Linkedin />
        </a>

        <a
          href="https://portifolio-v5.vercel.app"
          target="blank"
          className="hover:text-zinc-300 transition-all cursor-pointer p-2 grid place-items-center"
        >
          <Globe />
        </a>
      </div>
    </footer>
  );
}

// AstroBay
// HenQTP
// HTQP
