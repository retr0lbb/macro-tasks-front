import { Logo } from "@/assets";
import { NavLink } from "./nav-link";
import { Folder, Share, User } from "lucide-react";
import { UserCard } from "./user-card";

interface SideBarMenuProps {
  useLogout: () => Promise<void>;
}

export function SideBarMenu(props: SideBarMenuProps) {
  return (
    <nav className="min-h-full min-w-[300px] bg-zinc-900/40 border-r border-zinc-800 flex flex-col py-6 px-2">
      {/** Header */}
      <div className="flex items-center justify-start w-full">
        <img src={Logo} alt="Logo" className="size-24" />
      </div>
      <div className="flex flex-1 py-5 px-2">
        <ul className="flex flex-col gap-2 w-full">
          <NavLink Icon={Folder} text="Projects" to="/" isActive />
          <NavLink Icon={User} text="Account" to="/" isActive={false} />
          <NavLink Icon={Share} text="Share" to="/" isActive={false} />
        </ul>
      </div>
      <UserCard useLogout={props.useLogout} />
    </nav>
  );
}
