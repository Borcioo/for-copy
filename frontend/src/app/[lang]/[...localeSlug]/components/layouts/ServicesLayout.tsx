import React from "react";
import {
  pageDataProps,
  renderSection,
} from "@/app/[lang]/utils/custom-section-renderer";
import { HeaderProps } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import Header from "@/app/[lang]/components/Reusable/Components/Heading/Header";
import ServiceTile, {
  ServiceTileProps,
} from "@/app/[lang]/components/Services/ServiceTile";
import { RedBarProps } from "@/app/[lang]/[...localeSlug]/components/layouts/CareerLayout";
import CTA from "@/app/[lang]/components/Reusable/CTA/CTA";
import ServiceTech, {
  ServiceTechProps,
} from "@/app/[lang]/components/Services/ServiceTech";

export interface ServiceTilesDataProps {
  serviceTiles: ServiceTileProps[];
}

export interface ServiceTechDataProps {
  title: string;
  technologies: ServiceTechProps[];
}
function ServicesLayout({ attributes }: { attributes: pageDataProps }) {
  const headerData: HeaderProps = renderSection(attributes, "sections.header");
  const tilesData: ServiceTilesDataProps = renderSection(
    attributes,
    "sections.service-tiles-section",
  );
  const ctaData: RedBarProps = renderSection(attributes, "sections.red-bar");
  const techData: ServiceTechDataProps = renderSection(
    attributes,
    "sections.tech-stack",
  );
  return (
    <div className="flex items-center flex-col w-full">
      {headerData && <Header data={headerData} />}
      {tilesData.serviceTiles.length > 0 && (
        <div className="flex flex-col gap-[24px] lg:gap-[120px] items-center w-full">
          {tilesData.serviceTiles.map((serviceTile, index) => (
            <ServiceTile key={index} index={index} data={serviceTile} />
          ))}
        </div>
      )}
      {techData && (
        <div className="flex items-center flex-col max-w-[1138px] w-full">
          {techData.title && (
            <h2 className="text-[42px] leading-[48px] font-bold text-center mt-[64px] lg:mt-[150px]">
              {techData.title}
            </h2>
          )}
          {techData.technologies.length > 0 && (
            <div className="flex items-center justify-center flex-row flex-wrap gap-[23px] lg:gap-[32px] mt-[42px] lg:mt-[113px]">
              {techData.technologies.map((tech, index) => (
                <ServiceTech key={index} data={tech} />
              ))}
            </div>
          )}
        </div>
      )}
      {ctaData && <CTA data={ctaData} />}
    </div>
  );
}

export default ServicesLayout;
