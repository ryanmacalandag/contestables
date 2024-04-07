import { PropsWithChildren } from "react";

interface LayoutNavLeftProps extends PropsWithChildren {
  className?: string;
}

export default function LayOutNavLeft({className, children}: LayoutNavLeftProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}