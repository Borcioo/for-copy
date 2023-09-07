"use client";
import {
  pageDataProps,
  renderSection,
} from "@/app/[lang]/utils/custom-section-renderer";
import { HeaderProps } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import Header from "@/app/[lang]/components/Reusable/Components/Heading/Header";
import SearchBar, {
  SearchBarProps,
  searchType,
} from "@/app/[lang]/components/CaseStudy/SearchBar";
import { useState } from "react";
import CaseMainSection, {
  MainProps,
} from "@/app/[lang]/components/CaseStudy/CaseMainSection";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import SearchBarMobile from "@/app/[lang]/components/CaseStudy/SearchBarMobile";
export default function CaseStudyLayout({
  attributes,
}: {
  attributes: pageDataProps;
}) {
  const headerData: HeaderProps = renderSection(attributes, "sections.header");
  const searchData: SearchBarProps = renderSection(
    attributes,
    "sections.case-search",
  );
  const caseMainSection: MainProps = renderSection(
    attributes,
    "sections.case-data",
  );

  const list = searchData.searchTypes;
  const [activeOption, setActiveOption] = useState<searchType>(list[0]);

  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  const handleOptionClick = (option: searchType) => {
    const opt: searchType = { text: "" };
    // setActiveOption(opt);
    // setTimeout(() => {
    setActiveOption(option);
    // }, 200);
  };

  return (
    <div ref={parent} className="flex items-center flex-col w-full">
      {headerData && <Header data={headerData} />}
      {searchData && (
        <>
          <SearchBar
            data={searchData}
            activeOption={activeOption}
            handleOptionClick={handleOptionClick}
          />
          <SearchBarMobile
            data={searchData}
            activeOption={activeOption}
            handleOptionClick={handleOptionClick}
          />
        </>
      )}
      {caseMainSection && (
        <CaseMainSection
          points={caseMainSection.points}
          activeOption={activeOption}
        />
      )}
    </div>
  );
}
