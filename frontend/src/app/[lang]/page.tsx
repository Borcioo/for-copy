import LangRedirect from "./components/LangRedirect";
import {sectionRenderer} from "./utils/section-renderer";
import {getPageBySlug} from "@/app/[lang]/utils/get-page-by-slug";
import LayoutSwitch from "@/app/[lang]/[...localeSlug]/components/layoutSwitch";

export default async function RootRoute({params}: { params: { lang: string } }) {
    const page = await getPageBySlug("home", params.lang);
    if (page.data.length == 0 && params.lang !== "pl") return <LangRedirect/>;
    if (page.data.length === 0) return null;
    const contentSections = page.data[0].attributes.contentSections;
    const switchValues = ['contact', 'career', 'home']
    if (switchValues.includes(page.data[0].attributes.slug)) {
        return <LayoutSwitch data={page.data[0]}/>
    }
    return contentSections.map((section: any, index: number) => sectionRenderer(section, index));
}
