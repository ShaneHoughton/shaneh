import React from "react";
import Image from "next/image";

const NavFooter: React.FC = () => {
  return (
    <footer className="flex gap-[24px] text-center text-wrap justify-start sm:justify-start">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/question.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        about
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/development"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/code.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        development
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/other"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/sparkles.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        other
      </a>
    </footer>
  );
};

export default NavFooter;
