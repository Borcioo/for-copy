"use client";
import TilesWrapper, {
  BlogProps,
} from "@/app/[lang]/components/Blog/TilesWrapper";
import { HeaderProps } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import {
  pageDataProps,
  renderSection,
} from "@/app/[lang]/utils/custom-section-renderer";
import Header from "@/app/[lang]/components/Reusable/Components/Heading/Header";
import { RedBarProps } from "@/app/[lang]/[...localeSlug]/components/layouts/CareerLayout";
import CTA from "@/app/[lang]/components/Reusable/CTA/CTA";
import { useState } from "react";
import ChangePageButtons from "@/app/[lang]/components/Blog/ChangePageButtons";

export default function BlogLayout({
  attributes,
}: {
  attributes: pageDataProps;
}) {
  const headerData: HeaderProps = renderSection(attributes, "sections.header");
  const blogTilesData: BlogProps = renderSection(
    attributes,
    "sections.blog-group",
  );
  const ctaData: RedBarProps = renderSection(attributes, "sections.red-bar");
  const buttonsCount = Math.ceil(blogTilesData.blogs.length / 6);
  const [beg, setBeg] = useState<number>(0);
  const [end, setEnd] = useState<number>(6);

  return (
    <div className="flex items-center overflow-x-hidden justify-center flex-col w-full">
      {headerData && <Header data={headerData} />}
      {blogTilesData && (
        <TilesWrapper data={blogTilesData} beg={beg} end={end} />
      )}
      {buttonsCount > 0 && (
        <ChangePageButtons
          buttonsCount={buttonsCount}
          setBeg={setBeg}
          setEnd={setEnd}
        />
      )}
      {ctaData && <CTA data={ctaData} />}
    </div>
  );
}
