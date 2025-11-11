"use client";
import PageLayout from "../_components/PageLayout";

export default function Developement() {
  const title = "development";
  return (
    <PageLayout title={title}>
      <ul className="w-full flex flex-col gap-4 list-disc ml-4">
        <li className="text-xl">
          <a
            className="hover:underline hover:underline-offset-4 cursor-pointer"
            href="https://github.com/ShaneHoughton/deets"
            target="_blank"
          >
            <span className="font-semibold">deets</span> - a github action for
            building release notes
          </a>
        </li>
        <li className="text-xl">
          <a
            className="hover:underline hover:underline-offset-4 cursor-pointer"
            href="https://sketchi.io/"
            target="_blank"
          >
            <span className="font-semibold">sketchi.io</span> - a pilot web app
            for sharing drawings
          </a>
        </li>
      </ul>
    </PageLayout>
  );
}
