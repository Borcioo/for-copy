import {fetchAPI} from "@/app/[lang]/utils/fetch-api";

export async function getPageBySlug(slug: string, lang: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    const path = `/pages`;

    const urlParamsObject = {filters: {slug}, locale: lang};
    const options = {headers: {Authorization: `Bearer ${token}`}};
    return await fetchAPI(path, urlParamsObject, options);
}

export async function getPageByLocaleSlug(localeSlug: string, lang: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    const path = `/pages`;
    const urlParamsObject = {filters: {localeSlug}, locale: lang};
    const backupParamsObject = {filters: {slug: localeSlug}, locale: lang};

    const options = {headers: {Authorization: `Bearer ${token}`}};
    const page = await fetchAPI(path, urlParamsObject, options)

    if (page.data.length === 0) {
        const pageBySlug = await fetchAPI(path, backupParamsObject, options);

        if (pageBySlug.data.length === 0) {
            return {redirect: true, localeSlug: '404'};
        }
        return {redirect: true, localeSlug: pageBySlug.data[0].attributes.localeSlug};
    }
    return page;
}



