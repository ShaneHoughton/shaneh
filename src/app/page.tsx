"use client";
import PageLayout from "./_components/PageLayout";
import Image from "next/image";

export default function Home() {
  const description =
    "Hi there, I'm Shane Houghton. I am a full-stack software developer, computer scientist, and artist from Easton, PA.";
  return (
    <PageLayout title="shaneh.dev" description={description}>
      <Image
        aria-hidden
        unoptimized
        priority
        className="ml-auto right-20 bottom-25 w-2/3 absolute opacity-70"
        src="/squid.gif"
        alt="my cat, Squidward, lounging"
        width={900}
        height={900}
      />
    </PageLayout>
  );
}
