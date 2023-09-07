import Image from "next/image";
import {getStrapiMedia} from "../../utils/api-helpers";

interface Employee {
    data: {
        id: number;
        name: string;
        email: string;
        phoneNumber: string;
        role: string;
        avatar: {
            data: {
                id: string;
                attributes: {
                    name: string;
                    url: string;
                    alternativeText: string;
                }
            }
        }
    }
}


export default function ContactEmployee({data}: Employee) {
    const imageUrl = getStrapiMedia(data.avatar.data.attributes.url);
    return (
        <div className="flex flex-col h-fit flex-1">
            <Image className='w-[100px] h-[100px]' src={imageUrl || ""}
                   alt={data.avatar.data.attributes.alternativeText || 'employee image'}
                   width={200}
                   height={200}/>
            <div className="flex flex-col gap-2 flex-1">
                <p className="mt-8 text-sm lg:text-base font-bold">{data.name}</p>
                <p className='text-[12px] h-9 lg:h-fit lg:text-base w-fit lg:w-[258px]'>{data.role}</p>
                <p className="text-sm lg:text-base">{data.phoneNumber}</p>
                <p className="text-[12px] text-[#F00000] lg:text-base">{data.email}</p>
            </div>
        </div>
    )
}