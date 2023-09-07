import { BlogPointProp } from "@/app/[lang]/components/Blog/BlogActiveView";
import Image from "next/image";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";

export default function BlogPoint({
  data,
  length,
  index,
}: {
  data: BlogPointProp;
  length: number;
  index: number;
}) {
  const imageUrl =
    data.image.data !== null
      ? getStrapiMedia(data.image.data.attributes.url)
      : null;
  const renderSection = () => {
    if (!data.row) {
      return (
        <>
          <div className="w-full md:max-w-[940px]">
            <h3 className="text-base font-bold text-[#F00000]">
              {data?.title}
            </h3>
            <div className="flex flex-col">
              {data.descriptionList.length > 0 &&
                data.descriptionList.map((item, index) => (
                  <p
                    className="text-base pl-8 md:pl-0 md:pr-20 mt-[40px]"
                    key={index}
                  >
                    {item.text}
                  </p>
                ))}
              {data.dottedList.length > 0 && (
                <ul className="pl-8 md:pl-8 md:pr-20 list-disc mt-[40px]">
                  {data.dottedList.map((item, index) => (
                    <li className="text-base" key={index}>
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
              {data.descriptionListSecond.length > 0 &&
                data.descriptionListSecond.map((item, index) => (
                  <p
                    className="text-base pl-8 md:pl-0 md:pr-20 mt-[40px]"
                    key={index}
                  >
                    {item.text}
                  </p>
                ))}
            </div>
          </div>
          {imageUrl && (
            <div className="mt-20 md:mt-[96px] max-w-[1140px] max-h-[540px]">
              <Image
                src={imageUrl || ""}
                alt={
                  data.image.data.attributes.alternativeText ||
                  "case study tile image"
                }
                width={1140}
                height={540}
              />
            </div>
          )}
        </>
      );
    } else {
      return (
        <div className="flex w-full items-center justify-center flex-col-reverse md:flex-row">
          <div className="max-w-[566px] max-h-[371px] mt-[48px] md:mt-0">
            {imageUrl && (
              <Image
                src={imageUrl || ""}
                alt={
                  data.image.data.attributes.alternativeText ||
                  "case study tile image"
                }
                width={566}
                height={371}
              />
            )}
          </div>
          <div className="md:pl-[81px]">
            <div className="max-w-[485px]">
              <h3 className="text-base font-bold text-[#F00000]">
                {data?.title}
              </h3>
            </div>
            <div className="flex items-start flex-col max-w-[485px]">
              {data.descriptionList.length > 0 &&
                data.descriptionList.map((item, index) => (
                  <p
                    className="text-base pl-8 md:pl-0 md:pr-20 mt-[40px]"
                    key={index}
                  >
                    {item.text}
                  </p>
                ))}
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="flex flex-col w-full items-center mt-[48px] md:mt-[80px]">
      {renderSection()}
    </div>
  );
}
