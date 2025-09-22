import { Logo } from "@/assets";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { NavLink } from "./nav-link";
import { Folder, Share, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

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

      <DropdownMenu dir="ltr">
        <DropdownMenuTrigger asChild>
          <div className="w-full flex p-4 items-center justify-start gap-8 bg-zinc-900 border border-zinc-800 cursor-pointer transition-all rounded-xl hover:bg-zinc-950">
            <Avatar>
              <AvatarImage src="https://pbs.twimg.com/profile_images/1698555781912858624/7EYgI6yr_400x400.jpg" />
              <AvatarFallback>MYC</AvatarFallback>
            </Avatar>

            <div className="flex flex-col flex-1 justify-center">
              <p className="text-sm font-normal">Lil_Henry</p>
              <p className="text-xs text-zinc-400">lil@mail.com</p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent loop className="w-56" align="start">
          <DropdownMenuLabel>My account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={props.useLogout}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
