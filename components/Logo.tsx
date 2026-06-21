"use client";
import Link from "next/link";
import React from "react";
import { siteConfig } from "@/lib/site-config";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 px-2 py-1 relative z-20"
    >
      <div className="h-5 w-6 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm bg-orange-500" />
      <span className="font-bold text-orange-500 text-base">{siteConfig.name}</span>
    </Link>
  );
};