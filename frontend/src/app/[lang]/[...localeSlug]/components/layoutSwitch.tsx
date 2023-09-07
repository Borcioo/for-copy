"use client";
import ContactLayout from "@/app/[lang]/[...localeSlug]/components/layouts/ContactLayout";
import CareerLayout from "@/app/[lang]/[...localeSlug]/components/layouts/CareerLayout";
import HomeLayout from "@/app/[lang]/[...localeSlug]/components/layouts/HomeLayout";
import ForetoGroupLayout from "@/app/[lang]/[...localeSlug]/components/layouts/ForetoGroupLayout";
import AboutUsLayout from "@/app/[lang]/[...localeSlug]/components/layouts/AboutUsLayout";
import CaseStudyLayout from "@/app/[lang]/[...localeSlug]/components/layouts/CaseStudyLayout";
import ServicesLayout from "@/app/[lang]/[...localeSlug]/components/layouts/ServicesLayout";
import BlogLayout from "@/app/[lang]/[...localeSlug]/components/layouts/BlogLayout";

export default function LayoutSwitch({ data }: any) {
  const attributes = data.attributes;
  switch (attributes.slug) {
    case "contact":
      return <ContactLayout attributes={attributes} />;
    case "home":
      return <HomeLayout attributes={attributes} />;
    case "career":
      return <CareerLayout attributes={attributes} />;
    case "foreto-group":
      return <ForetoGroupLayout attributes={attributes} />;
    case "about":
      return <AboutUsLayout attributes={attributes} />;
    case "case-studies":
      return <CaseStudyLayout attributes={attributes} />;
    case "services":
      return <ServicesLayout attributes={attributes} />;
    case "blog":
      return <BlogLayout attributes={attributes} />;
    default:
      return null;
  }
}
