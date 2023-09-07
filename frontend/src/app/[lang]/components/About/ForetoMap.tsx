import Button, {
  ButtonProp,
} from "@/app/[lang]/components/Reusable/Components/Button";
import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";

export interface MapProps {
  title: string;
  subTitle: string;
  buttons: ButtonProp[];
  image: ImageProp;
}

export default function ForetoMap({ data }: { data: MapProps }) {
  const imageUrl = data?.image.data
    ? getStrapiMedia(data.image.data.attributes.url)
    : null;
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <div className="flex text-base lg:text-[42px] lg:leading-[48px] flex-col text-center font-bold">
        <div className="px-[58px] lg:px-0">
          {data.title && <h2>{data.title}</h2>}
          {data.subTitle && <h2 className="text-[#F00000]">{data.subTitle}</h2>}
        </div>
        {imageUrl && (
          <div className="w-full max-w-[1138px] mt-[42px] lg:mt-[108px]">
            <Image
              src={imageUrl || ""}
              alt={data.image.data.attributes.alternativeText || "map image"}
              width={1138}
              height={549}
            />
          </div>
        )}
      </div>
      <div className=" mt-[48px] lg:mt-[81px]">
        <Button data={data.buttons[0]} />
      </div>
    </div>
  );
}
