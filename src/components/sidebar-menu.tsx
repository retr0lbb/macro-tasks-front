import { Logo } from "@/assets";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { NavLink } from "./nav-link";
import { Folder, Share, User } from "lucide-react";

export function SideBarMenu() {
  return (
    <nav className="min-h-full min-w-[300px] bg-zinc-900 border-r border-zinc-800 flex flex-col py-6 px-2">
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

      <div className="w-full flex p-4 items-center justify-start">
        <Avatar>
          <AvatarImage src="https://pbs.twimg.com/profile_images/1698555781912858624/7EYgI6yr_400x400.jpg" />
          <AvatarFallback>MYC</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
