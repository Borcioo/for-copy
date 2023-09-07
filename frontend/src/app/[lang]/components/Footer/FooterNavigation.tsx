import {FooterLink} from "@/app/[lang]/components/Footer/Footer";
import {usePathname} from "next/navigation";
import Link from "next/link";


export default function FooterNavigation({menuLinks}:{menuLinks:Array<FooterLink>}){

    const FooterLink=({url, text}: FooterLink)=>{
        const path=usePathname()
        return(
            <li className="flex">
                <Link href={url}
                      className={`hover:text-[#F00000] ${path === url && "text-violet-400 border-violet-400"}}`}>
                    {text}
                </Link>
            </li>
        )
    }
    return(
                <div className=" h-[132px] lg:h-full col-span-6 text-center md:text-left md:col-span-3">
                    <ul className="flex h-[132px] lg:h-full flex-wrap  flex-col gap-3">
                        {menuLinks.map((link: FooterLink) => (
                            <FooterLink key={link.id} {...link} />
                        ))}
                    </ul>
                </div>

    )

}