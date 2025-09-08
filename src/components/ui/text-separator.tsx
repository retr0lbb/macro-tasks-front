import { twMerge } from "tailwind-merge";

interface TextSeparatorProps {
  text: string;
  color: string;
  textColor: string;
  className?: string;
}

export function TextSeparator({ ...props }: TextSeparatorProps) {
  return (
    <div
      className={twMerge(
        `flex items-center justify-around w-full`,
        props.className,
      )}
    >
      <div className={`w-full h-0.5 rounded-lg ${props.color}`} />
      <div className="px-4 py-2 grid place-items-center">
        <p className={`text-sm text-center ${props.textColor}`}>{props.text}</p>
      </div>
      <div className={`w-full h-0.5 rounded-lg ${props.color}`} />
    </div>
  );
}
