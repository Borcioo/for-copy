import HomeHeader, {
  HomeHeaderProps,
} from "@/app/[lang]/components/Home/Header/HomeHeader";
import HomeClients, {
  HomeClientProps,
} from "@/app/[lang]/components/Home/Clients/HomeClients";
import HomeServices, {
  HomeServicesProps,
} from "@/app/[lang]/components/Home/Services/HomeServices";
import HomePortfolio, {
  HomePortfolioProps,
} from "@/app/[lang]/components/Home/Portfolio/HomePortfolio";
import References, {
  HomeReferencesProps,
} from "@/app/[lang]/components/Reusable/Components/References/References";
import HomeWorksWith, {
  HomeWorksWithProps,
} from "@/app/[lang]/components/Home/WorksWith/HomeWorksWith";
import CTA from "@/app/[lang]/components/Reusable/CTA/CTA";
import HomeAbout, {
  HomeAboutUsProps,
} from "@/app/[lang]/components/Home/About/HomeAbout";
import { RedBarProps } from "@/app/[lang]/[...localeSlug]/components/layouts/CareerLayout";
import {
  pageDataProps,
  renderSection,
} from "@/app/[lang]/utils/custom-section-renderer";
import HomeSolutions, {
  HomeSolutionProps,
} from "@/app/[lang]/components/Home/Solutions/HomeSolutions";
import HomeForetoGroup, {
  HomeForetoGroupProps,
} from "@/app/[lang]/components/Home/ForetoGroup/HomeForetoGroup";
import HomeBlog, {
  HomeBlogProps,
} from "@/app/[lang]/components/Home/Blog/HomeBlog";
import HomeWorkflow, {
  HomeWorkflowProps,
} from "@/app/[lang]/components/Home/Workflow/HomeWorkflow";

export default function HomeLayout({
  attributes,
}: {
  attributes: pageDataProps;
}) {
  const headerData: HomeHeaderProps = renderSection(
    attributes,
    "sections.home-header",
  );
  const clientsData: HomeClientProps = renderSection(
    attributes,
    "sections.home-client",
  );
  const servicesData: HomeServicesProps = renderSection(
    attributes,
    "sections.home-services",
  );
  const portfolioData: HomePortfolioProps = renderSection(
    attributes,
    "sections.home-portfolio",
  );
  const referencesData: HomeReferencesProps = renderSection(
    attributes,
    "sections.home-references",
  );
  const redBarData: RedBarProps = renderSection(attributes, "sections.red-bar");
  const aboutUsData: HomeAboutUsProps = renderSection(
    attributes,
    "sections.home-about-us",
  );
  const worksWithData: HomeWorksWithProps = renderSection(
    attributes,
    "sections.home-works-with",
  );
  const solutionsData: HomeSolutionProps = renderSection(
    attributes,
    "sections.home-solutions",
  );
  const foretoGroupData: HomeForetoGroupProps = renderSection(
    attributes,
    "sections.home-foreto-group",
  );
  const blogData: HomeBlogProps = renderSection(
    attributes,
    "sections.home-blog",
  );
  const workflowData: HomeWorkflowProps = renderSection(
    attributes,
    "sections.home-workflow",
  );

  return (
    <div className="flex flex-col w-full">
      {headerData && <HomeHeader data={headerData} />}
      {clientsData && <HomeClients data={clientsData} />}
      {servicesData && <HomeServices data={servicesData} />}
      {portfolioData && <HomePortfolio data={portfolioData} />}
      {referencesData && <References data={referencesData} />}
      {redBarData && <CTA data={redBarData} />}
      {aboutUsData && <HomeAbout data={aboutUsData} />}
      {workflowData && <HomeWorkflow data={workflowData} />}
      {worksWithData && <HomeWorksWith data={worksWithData} />}
      {solutionsData && <HomeSolutions data={solutionsData} />}
      {foretoGroupData && (
        <div className="mt-[48px] lg:mt-[104px]">
          <HomeForetoGroup data={foretoGroupData} />
        </div>
      )}
      {blogData && <HomeBlog data={blogData} />}
    </div>
  );
}
