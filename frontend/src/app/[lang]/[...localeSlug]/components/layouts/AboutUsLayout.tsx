import {
  pageDataProps,
  renderSection,
} from "@/app/[lang]/utils/custom-section-renderer";
import { HeaderProps } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import Header from "@/app/[lang]/components/Reusable/Components/Heading/Header";
import HomeAbout, {
  HomeAboutUsProps,
} from "@/app/[lang]/components/Home/About/HomeAbout";
import Timeline, {
  TimelineProps,
} from "@/app/[lang]/components/About/Timeline";
import AboutDescription, {
  AboutDescriptionProps,
} from "@/app/[lang]/components/About/AboutDescription";
import ValuesGroup, {
  ValuesGroupProps,
} from "@/app/[lang]/components/Reusable/Components/ValuesGroup";
import ForetoMap, { MapProps } from "@/app/[lang]/components/About/ForetoMap";
import References, {
  HomeReferencesProps,
} from "@/app/[lang]/components/Reusable/Components/References/References";
import Clients, { ClientsProps } from "@/app/[lang]/components/About/Clients";
import { RedBarProps } from "@/app/[lang]/[...localeSlug]/components/layouts/CareerLayout";
import CTA from "@/app/[lang]/components/Reusable/CTA/CTA";
import CodeCast, {
  CodeCastProps,
} from "@/app/[lang]/components/About/CodeCast";

export default function AboutUsLayout({
  attributes,
}: {
  attributes: pageDataProps;
}) {
  const headerData: HeaderProps = renderSection(attributes, "sections.header");
  const aboutUsData: HomeAboutUsProps = renderSection(
    attributes,
    "sections.home-about-us",
  );
  const timelineData: TimelineProps = renderSection(
    attributes,
    "sections.timeline",
  );
  const descriptionData: AboutDescriptionProps = renderSection(
    attributes,
    "sections.foreto-description",
  );

  const valuesData: ValuesGroupProps = renderSection(
    attributes,
    "sections.value-group",
  );

  const mapData: MapProps = renderSection(attributes, "sections.map");
  const referencesData: HomeReferencesProps = renderSection(
    attributes,
    "sections.home-references",
  );

  const clientsData: ClientsProps = renderSection(
    attributes,
    "sections.home-client",
  );

  const ctaData: RedBarProps = renderSection(attributes, "sections.red-bar");

  const codeCastData: CodeCastProps = renderSection(
    attributes,
    "sections.code-cast",
  );

  return (
    <div className="flex items-center flex-col w-full">
      {headerData && aboutUsData && (
        <Header data={headerData} children={<HomeAbout data={aboutUsData} />} />
      )}
      {timelineData && <Timeline data={timelineData} />}
      {descriptionData && <AboutDescription data={descriptionData} />}
      {valuesData && (
        <div className=" mt-[80px] lg:mt-[161px]">
          <ValuesGroup data={valuesData} />
        </div>
      )}
      {mapData && <ForetoMap data={mapData} />}
      {referencesData && <References data={referencesData} />}
      {clientsData && <Clients data={clientsData} />}
      {ctaData && <CTA data={ctaData} />}
      {codeCastData && <CodeCast data={codeCastData} />}
    </div>
  );
}
