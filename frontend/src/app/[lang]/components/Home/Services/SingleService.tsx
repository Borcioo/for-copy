import {} from "@/app/[lang]/[...localeSlug]/components/layouts/HomeLayout";
import {getStrapiMedia} from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";
import React from "react";
import {SingleServiceListProps, SingleServiceProps} from "@/app/[lang]/components/Home/Services/HomeServices";

export default function SingleService({data}: { data: SingleServiceProps }) {
    const imageUrl = getStrapiMedia(data.serviceImage.data.attributes.url);
    return (
        <div
            className="w-[375px] h-[240px] lg:w-[358px] lg:h-[362px] shadow-2xl pt-[18px] pl-[27px] pb-[34px] pr-[34px] lg:pr-10 lg:pt-[27px] lg:pb-[37px] flex flex-col justify-between">
            <div className="flex flex-row items-center gap-[11px] lg:gap-0 lg:flex-col lg:items-start">
                <div className="w-[66px] lg:w-[100px] aspect-square">
                    <Image className='h-fit object-cover' src={imageUrl || ""}
                           alt={data.serviceImage.data.attributes.alternativeText || 'header image'}
                           width={100}
                           height={100}/>

                </div>
                <p className="text-[28px] lg:text-[32px] leading-[122.5%] font-bold mt-[9px]">{data.serviceTitle}</p>
            </div>
            <div className="flex flex-col gap-2">
                {data.list.map((item: SingleServiceListProps, index: number) => {
                    return (
                        <div key={index} className="flex flex-row items-center gap-2">
                            <div className="w-[8px] h-[8px] bg-[#F00000]"/>
                            <p>{item.item}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
