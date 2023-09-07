import { sectionRenderer } from "@/app/[lang]/utils/section-renderer";
import { Metadata } from "next";
import { getPageByLocaleSlug } from "@/app/[lang]/utils/get-page-by-slug";
import { FALLBACK_SEO } from "@/app/[lang]/utils/constants";
import { redirect } from "next/navigation";
import LayoutSwitch from "@/app/[lang]/[...localeSlug]/components/layoutSwitch";

type Props = {
  params: {
    lang: string;
    localeSlug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getPageByLocaleSlug(params.localeSlug, params.lang);

  if (page.redirect === true) {
    redirect(`/${params.lang}/${page?.localeSlug}`);
  }

  if (!page.data[0].attributes?.seo) return FALLBACK_SEO;
  const metadata = page.data[0].attributes.seo;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
  };
}

export default async function PageRoute({ params }: Props) {
  const page = await getPageByLocaleSlug(params.localeSlug, params.lang);
  if (page.redirect === true) {
    redirect(`/${params.lang}/${page?.localeSlug}`);
  }
  const switchValues = [
    "contact",
    "career",
    "home",
    "foreto-group",
    "about",
    "case-studies",
    "services",
    "blog",
  ];
  if (switchValues.includes(page.data[0].attributes.slug)) {
    return <LayoutSwitch data={page.data[0]} />;
  }

  const contentSections = page.data[0].attributes.contentSections;
  return contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index),
  );
}
