"use client";
import PageLayout from "../_components/PageLayout";

export default function Other() {
  return (
    <PageLayout title="other stuff" description="artwork and passion projects">
      <div className="flex flex-wrap gap-10">
        <a
          className="hover:underline hover:underline-offset-4 cursor-pointer"
          href="https://youtu.be/hB5A7hiU6NI?si=lblSCb7gAcANZ2Zb"
          target="_blank"
          title="Abbie's birthday video"
        >
          <img className="w-72 h-48 bg-[url(../../public/bab.png)] bg-cover opacity-50 hover:opacity-100 transition-opacity duration-500 ease-in-out" />
        </a>
        <a
          className="hover:underline hover:underline-offset-4 cursor-pointer"
          href="https://youtu.be/-gTV87yEjkc?si=TiRzptUeawR13Qbx"
          target="_blank"
        >
          <div className="w-72 h-48 bg-[url(../../public/drive.png)] bg-cover opacity-50 hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
        </a>
      </div>
    </PageLayout>
  );
}
