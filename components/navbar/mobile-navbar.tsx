"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { Logo } from "@/components/Logo";
import { useMotionValueEvent, useScroll } from "framer-motion";

type NavItem = {
  title: string;
  link: string;
  target?: "_blank";
  children?: NavItem[];
};

type Props = {
  navItems: NavItem[];
};

export const MobileNavbar = ({ navItems }: Props) => {
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });

  return (
    <div
      className={cn(
        "flex justify-between bg-zinc-950 items-center w-full px-4 py-3 border-b border-orange-500/30 transition duration-200",
        showBackground &&
          "bg-zinc-950 shadow-[0_2px_20px_0_rgba(249,115,22,0.25)]",
      )}
    >
      <Logo />
      <IoIosMenu
        className="h-6 w-6 text-orange-500"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="fixed inset-0 bg-zinc-950 z-50 flex flex-col items-start justify-start space-y-10 pt-5 text-xl text-zinc-300 transition duration-200">
          <div className="flex items-center justify-between w-full px-5">
            <Logo />
            <div className="flex items-center space-x-2">
              <IoIosClose
                className="h-8 w-8 text-orange-500"
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[14px] px-8">
            {navItems.map((navItem) =>
              navItem.children && navItem.children.length > 0 ? (
                navItem.children.map((childNavItem) => (
                  <Link
                    key={`${navItem.title}-${childNavItem.title}`}
                    href={childNavItem.link}
                    onClick={() => setOpen(false)}
                    className="relative max-w-[15rem] text-left text-2xl hover:text-orange-400 transition-colors"
                  >
                    <span className="block text-orange-500 font-semibold">
                      {childNavItem.title}
                    </span>
                  </Link>
                ))
              ) : (
                <Link
                  key={navItem.title}
                  href={navItem.link}
                  onClick={() => setOpen(false)}
                    className="relative hover:text-orange-400 transition-colors"
                  >
                    <span className="block text-[26px] text-orange-500 font-semibold">
                      {navItem.title}
                    </span>
                  </Link>
              ),
            )}
          </div>
          {/* Login/Signup buttons - uncomment to enable authentication */}
          {/* <div className="flex flex-row w-full items-start gap-2.5  px-8 py-4 ">
            <Button asChild href="/signup">
              Sign Up
            </Button>
            <Button variant="ghost" asChild href="/login">
              Login
            </Button>
          </div> */}
        </div>
      )}
    </div>
  );
};
