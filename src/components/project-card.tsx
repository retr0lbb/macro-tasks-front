interface ProjectCardProps {
  children: React.ReactNode;
}
function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 shadow-md flex flex-col gap-2">
      {props.children}
    </div>
  );
}
interface ProjectCardHeaderProps {
  children: React.ReactNode;
  portraitUrl: string;
  numberOfTasks: number;
}

function Header(props: ProjectCardHeaderProps) {
  return (
    <div className="flex w-full items-center justify-between min-w-[400px]">
      <div className="flex items-center justify-center gap-4">
        <div className="size-10 rounded-full bg-pink-600" />
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-zinc-200">
            {props.children}
          </h1>
          <p className="text-sm text-zinc-500 font-medium">
            {props.numberOfTasks} Tasks
          </p>
        </div>
      </div>

      <div>
        <p className="text-sm text-zinc-400 hover:underline cursor-pointer">
          Edit
        </p>
      </div>
    </div>
  );
}

interface ProjectCardDescriptionProps {
  children: React.ReactNode;
}

function Description(props: ProjectCardDescriptionProps) {
  return <p className="text-zinc-400 font-light">{props.children}</p>;
}

ProjectCard.Header = Header;
ProjectCard.Description = Description;

export { ProjectCard };
