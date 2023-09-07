"use client";
import {usePathname} from "next/navigation";
import Link from "next/link";
import Logo from "../Logo";
import {CgWebsite} from "react-icons/cg";
import {FaDiscord, FaLinkedin} from "react-icons/fa";
import {AiFillTwitterCircle, AiFillYoutube} from "react-icons/ai";
import FooterLogo from "@/app/[lang]/components/Footer/FooterLogo";
import FooterContact from "@/app/[lang]/components/Footer/FooterContact";
import FooterNavigation from "@/app/[lang]/components/Footer/FooterNavigation";

export interface FooterLink {
    id: number;
    url: string;
    newTab: boolean;
    text: string;
    social?: string;
}

export interface ContactData {
    place: string | null;
    phoneNumber: string | null;
    phoneNumberSecondary: string | null;
    email: string | null;
}

export interface ContactDataList {
    contactList: Array<ContactData>
}

interface CategoryLink {
    id: string;
    attributes: {
        name: string;
        slug: string;
    };
}

function CategoryLink({attributes}: CategoryLink) {
    return (
        <li className="flex">
            <Link href={`/blog/${attributes.slug}`} className="hover:text-violet-400">
                {attributes.name}
            </Link>
        </li>
    );
}

function RenderSocialIcon({social}: { social: string | undefined }) {
    switch (social) {
        case "WEBSITE":
            return <CgWebsite/>;
        case "TWITTER":
            return <AiFillTwitterCircle/>;
        case "YOUTUBE":
            return <AiFillYoutube/>;
        case "DISCORD":
            return <FaDiscord/>;
        case "LINKEDIN":
            return <FaLinkedin/>;
        default:
            return null;
    }
}

export default function Footer({
                                   logoUrl,
                                   logoText,
                                   menuLinks,
                                   categoryLinks,
                                   legalLinks,
                                   socialLinks,
                                   contactTitle,
                                   contactData,
                                   footerDescription,
                               }: {
    logoUrl: string | null;
    logoText: string | null;
    menuLinks: Array<FooterLink>;
    categoryLinks: Array<CategoryLink>;
    legalLinks: Array<FooterLink>;
    socialLinks: Array<FooterLink>;
    contactTitle: string | null;
    contactData: Array<ContactData>;
    footerDescription: string | null;
}) {
    return (
        <footer className="bg-[#F6F6F6] flex flex-col justify-center items-center">
            <div>
                <div className="flex pt-10  lg:pt-20 pb-16 flex-col lg:flex-row gap-[34px] lg:gap-[94px]">
                    <div
                        className="flex flex-row items-center lg:items-baseline lg:flex-col gap-40 lg:gap-[137px]">
                        {logoUrl && (
                            <div className="col-span-full md:pb-0 md:col-span-6">
                                <FooterLogo src={logoUrl}>{logoText &&
                                    <h2 className="text-2xl font-bold">{logoText}</h2>}</FooterLogo>
                            </div>
                        )}
                        <div className="flex gap-4 pr-5 lg:pr-0">
                            <button className="bg-[#F00000] w-[31px] h-[31px] flex items-end justify-center">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="#000"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.0826 14.6242L19.8088 9.919H15.2693V6.86562C15.2693 5.57862 15.9033 4.32331 17.9365 4.32331H20V0.317688C20 0.317688 18.1277 0 16.337 0C12.5989 0 10.1556 2.25388 10.1556 6.33344V9.91981H6V14.625H10.1556V26H15.2693V14.625L19.0826 14.6242Z"
                                        fill="white"/>
                                </svg>
                            </button>
                            <button className="bg-[#F00000] w-[31px] h-[31px] flex items-center justify-center">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="red"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.5 8C6.88071 8 8 6.88071 8 5.5C8 4.11929 6.88071 3 5.5 3C4.11929 3 3 4.11929 3 5.5C3 6.88071 4.11929 8 5.5 8Z"
                                        fill="white"/>
                                    <path
                                        d="M10.5176 9.3135V21.999H14.5171V15.7257C14.5171 14.0704 14.8333 12.4674 16.9175 12.4674C18.9729 12.4674 18.9984 14.3599 18.9984 15.8302V22H23V15.0433C23 11.6261 22.2529 9 18.1972 9C16.25 9 14.9448 10.0523 14.411 11.0482H14.3569V9.3135H10.5176ZM4 9.3135H8.00586V21.999H4V9.3135Z"
                                        fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <p className="text-[14px] w-[296px] lg:w-[285px] h-[285px]">
                        {footerDescription && (footerDescription)}
                    </p>
                    <FooterContact contactTitle={contactTitle} contactData={contactData}/>
                    <FooterNavigation menuLinks={menuLinks}/>
                </div>
                <p className="text-[14px] pb-10 lg:pb-20">copyright © all rights reserved 2022</p>
            </div>
            {/*            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    {logoUrl && (
                        <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                            <Logo src={logoUrl}>{logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}</Logo>
                        </div>
                    )}

                    {categoryLinks.length > 0 && (
                        <div className="col-span-6 text-center md:text-left md:col-span-3">
                            <p className="pb-1 text-lg font-medium">Categories</p>
                            <ul>
                                {categoryLinks.map((link: CategoryLink) => (
                                    <CategoryLink key={link.id} {...link} />
                                ))}
                            </ul>
                        </div>
                    )}

                    {menuLinks.length > 0 && (
                        <div className="col-span-6 text-center md:text-left md:col-span-3">
                            <p className="pb-1 text-lg font-medium">Menu</p>
                            <ul>
                                {menuLinks.map((link: FooterLink) => (
                                    <FooterLink key={link.id} {...link} />
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex">
                        <span className="mr-2">©{new Date().getFullYear()} All rights reserved</span>
                        <ul className="flex">
                            {legalLinks.map((link: FooterLink) => (
                                <Link href={link.url} className="text-gray-400 hover:text-gray-300 mr-2" key={link.id}>
                                    {link.text}
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        {socialLinks.map((link: FooterLink) => {
                            return (
                                <a
                                    key={link.id}
                                    rel="noopener noreferrer"
                                    href={link.url}
                                    title={link.text}
                                    target={link.newTab ? "_blank" : "_self"}
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-400 text-gray-900"
                                >
                                    <RenderSocialIcon social={link.social}/>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>*/}
        </footer>
    );
}
