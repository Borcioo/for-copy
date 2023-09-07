import { BlogTileProps } from "@/app/[lang]/components/Blog/TilesWrapper";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";
import BlogButton from "@/app/[lang]/components/Blog/BlogButton";

export default function BlogTile({ data }: { data: BlogTileProps }) {
  const imageUrl =
    data.image.data !== null
      ? getStrapiMedia(data.image.data.attributes.url)
      : null;
  return (
    <div className="flex flex-col flex-1 items-center md:items-start md:max-w-[540px] mt-[73px]">
      {imageUrl && (
        <Image
          className="max-w-[376px] max-h-[224px] md:max-w-[540px] md:max-h-[390px] md:min-h-[390px] object-cover"
          src={imageUrl || ""}
          alt={
            data.image.data.attributes.alternativeText ||
            "case study tile image"
          }
          width={551}
          height={395}
        />
      )}
      <div className="flex flex-col justify-between px-[32px] md:px-0">
        <div className="flex flex-col">
          {data.date && (
            <p className="hidden md:block text-[#737373] lg:mt-[16px]">
              {data.date}
            </p>
          )}
          {data.title && (
            <h3 className="lg:mt-[16px] mt-[18px] font-bold md:max-w-[501px] text-base md:text-[32px] md:leading-[122.5%]">
              {data.title}
            </h3>
          )}
          {data.description && (
            <p className="text-[14px] md:text-base mt-[7px]">
              {data.description}
            </p>
          )}
        </div>
        {data.buttons.length > 0 && (
          <div className="flex items-start mt-[18px]">
            {data.buttons.map((button, index) => (
              <BlogButton key={index} slug={data.slug} data={button} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
