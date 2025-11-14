"use client";
import { ReactNode } from "react";
import NavFooter from "./NavFooter";
import useIsVisible from "../_hooks/useIsVisible";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function PageLayout(props: PageLayoutProps) {
  const isVisible = useIsVisible();
  return (
    <div className="font-sans flex flex-col gap-10 items-center sm:items-start m-auto max-w-[2560px] w-full h-full p-10 sm:p-20">
      {props.title && (
        <header className="text-5xl text-center sm:text-left font-mono">
          {props.title}
        </header>
      )}
      {props.description && (
        <p className="w-full sm:w-1/3 ">{props.description}</p>
      )}

      <main
        className={`w-full flex flex-wrap gap-10 transition-opacity duration-500 ease-in-out overflow-y-scroll ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {props.children}
      </main>

      <div className="mt-auto bottom-0 sticky">
        <NavFooter />
      </div>
    </div>
  );
}
