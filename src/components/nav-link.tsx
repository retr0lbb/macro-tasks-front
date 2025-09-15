import { Link } from "@tanstack/react-router";
import type React from "react";

interface NavLinkProps {
  to: string;
  text: string;
  isActive: boolean;
  Icon: React.ElementType;
}

export function NavLink(props: NavLinkProps) {
  return (
    <li className="w-full flex group">
      <Link
        to={props.to}
        className={`flex items-center justify-start p-4 flex-1 gap-2 rounded-md ${props.isActive ? "bg-zinc-200" : "group-hover:bg-zinc-800"}`}
        disabled={props.isActive}
      >
        <props.Icon
          className={`size-6 ${props.isActive ? "text-zinc-950" : "text-zinc-200"}`}
        />
        <p
          className={`text-xl ${props.isActive ? "text-zinc-950" : "text-zinc-200"}`}
        >
          {props.text}
        </p>
      </Link>
    </li>
  );
}
