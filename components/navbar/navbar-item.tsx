"use client";

import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: "_blank";
};

export function NavBarItem({
  children,
  href,
  target,
  className = "flex items-center justify-center text-sm font-semibold leading-[110%] px-4 py-2 rounded-md text-orange-500 hover:text-orange-400 hover:bg-orange-500/10 transition-colors",
}: Props) {
  return (
    <Link href={href} className={className} target={target}>
      {children}
    </Link>
  );
}
