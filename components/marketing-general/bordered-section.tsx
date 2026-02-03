import { cn } from "@/lib/utils";

const BorderedSection = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("relative w-[159px] border-r p-1 max-lg:hidden", className)}
    >
      {children}
    </div>
  );
};

export default BorderedSection;
