import { HeaderProps } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import {
  pageDataProps,
  renderSection,
} from "@/app/[lang]/utils/custom-section-renderer";
import Header from "@/app/[lang]/components/Reusable/Components/Heading/Header";
import HomeForetoGroup, {
  HomeForetoGroupProps,
} from "@/app/[lang]/components/Home/ForetoGroup/HomeForetoGroup";

export default function ForetoGroupLayout({
  attributes,
}: {
  attributes: pageDataProps;
}) {
  const headerData: HeaderProps = renderSection(attributes, "sections.header");
  const foretoGroupData: HomeForetoGroupProps = renderSection(
    attributes,
    "sections.home-foreto-group",
  );

  return (
    <div className="flex  items-center flex-col w-full">
      {headerData && <Header data={headerData} />}
      {foretoGroupData && (
        <div className="mt-[30px] mb-[56px] lg:mb-[70px]">
          <HomeForetoGroup data={foretoGroupData} />
        </div>
      )}
    </div>
  );
}
