"use client";
import ActiveView from "@/app/[lang]/components/CaseStudy/CaseStudyActiveView";
import { PageProps } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";

export default function Page({ params }: PageProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <ActiveView params={params} />
    </div>
  );
}
