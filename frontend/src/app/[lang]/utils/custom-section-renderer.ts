export interface pageDataProps {
    slug: string;
    contentSections: any
}

export const renderSection = (attributes: pageDataProps, sectionName: string) => {
    return attributes.contentSections[attributes.contentSections.findIndex((item: {
        __component: string;
    }) => item.__component === sectionName)]
}