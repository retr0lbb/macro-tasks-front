import { useGetUserInfo } from "@/hooks/get-user-info";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface UserCardProps {
  useLogout: () => void;
}

export function UserCard(props: UserCardProps) {
  const { data, isPending, error } = useGetUserInfo();

  if (isPending) {
    return " ...";
  }
  return (
    <DropdownMenu dir="ltr">
      <DropdownMenuTrigger asChild>
        <div className="w-full flex p-4 items-center justify-start gap-8 bg-zinc-900 border border-zinc-800 cursor-pointer transition-all rounded-xl hover:bg-zinc-950">
          <Avatar>
            <AvatarImage src="https://pbs.twimg.com/profile_images/1698555781912858624/7EYgI6yr_400x400.jpg" />
            <AvatarFallback>MYC</AvatarFallback>
          </Avatar>

          <div className="flex flex-col flex-1 justify-center">
            <p className="text-sm font-normal">{data?.username}</p>
            <p className="text-xs text-zinc-400">{data?.email}</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent loop className="w-56" align="start">
        <DropdownMenuLabel>My account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={props.useLogout}>Log out</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
