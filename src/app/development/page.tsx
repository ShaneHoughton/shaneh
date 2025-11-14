"use client";
import PageLayout from "../_components/PageLayout";

export default function Developement() {
  const title = "development";
  return (
    <PageLayout title={title}>
      <h2 className="text-3xl font-mono font-medium">
        AI Saftey and Awareness
      </h2>
      <ul className="w-full flex flex-col gap-4 list-disc ml-4 px-2">
        <li className="text-xl">
          <a
            className="hover:underline hover:underline-offset-4 cursor-pointer"
            href="https://www.youtube.com/watch?v=O7BI4jfEFwA&t=0s"
            target="_blank"
          >
            <span className="font-semibold">DEF CON 33 (youtube)</span> -
            private data in LLMs
          </a>
        </li>
        <li className="text-xl">
          <a
            className="hover:underline hover:underline-offset-4 cursor-pointer"
            href="https://www.youtube.com/watch?v=5CKuiuc5cJM&t=0s"
            target="_blank"
          >
            <span className="font-semibold">
              Hank Green interviews Nate Soares (youtube)
            </span>{" "}
            - If Anyone Builds It, Everyone Dies
          </a>
        </li>
        <li className="text-xl">
          <a
            className="hover:underline hover:underline-offset-4 cursor-pointer"
            href="https://www.facebook.com/privacy/policy?subpage=1.subpage.1-YourActivityAndInformation"
            target="_blank"
          >
            <span className="font-semibold">META policies</span> - FYI YOUR
            public info, posts, art, etc, train AI models.
          </a>
        </li>
        <li className="text-xl">
          <a
            className="hover:underline hover:underline-offset-4 cursor-pointer"
            href="https://www.anthropic.com/research/agentic-misalignment"
            target="_blank"
          >
            <span className="font-semibold">
              Anthropic Agentic Misalignment
            </span>
            - Malicious behaviors of LLMs
          </a>
        </li>
      </ul>
      <h2 className="text-3xl font-mono font-medium">Personal work</h2>
      <ul className="w-full flex flex-col gap-4 list-disc ml-4 px-2">
        <li className="text-xl">
          <a
            className="hover:underline hover:underline-offset-4 cursor-pointer"
            href="https://github.com/ShaneHoughton"
            target="_blank"
          >
            <span className="font-semibold">ShanehHoughton</span> - my github
          </a>
        </li>
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
