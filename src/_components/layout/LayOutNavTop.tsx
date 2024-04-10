import { PropsWithChildren } from "react";

interface LayoutNavTopProps extends PropsWithChildren {
  className?: string;
}

export default function LayOutNavTop({className, children}: LayoutNavTopProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}