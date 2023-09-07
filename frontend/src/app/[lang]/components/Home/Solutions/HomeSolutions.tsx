import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import Button, {
  ButtonProp,
} from "@/app/[lang]/components/Reusable/Components/Button";
import SolutionTile from "@/app/[lang]/components/Home/Solutions/SolutionTile";

export interface HomeSolutionTile {
  name: string;
  buttonText: string;
  values: string;
  image: ImageProp;
}

export interface HomeSolutionProps {
  title: string;
  tiles: HomeSolutionTile[];
  buttons: ButtonProp[];
}

export default function HomeSolutions({ data }: { data: HomeSolutionProps }) {
  return (
    <div className="flex justify-center items-center flex-col bg-[#F6F6F6] lg:py-20 lg:mt-[102px]">
      {data.title && (
        <h2 className="text-[32px] leading-[122.5%] lg:text-[42px] lg:leading-[48px] mb-[48px] lg:mb-[46px] mt-[80px] lg:mt-0 font-bold">
          {data.title}
        </h2>
      )}
      <div className="flex flex-wrap items-center justify-center  w-full max-w-[1154px] gap-[30px]">
        {data.tiles.length > 0 &&
          data.tiles.map((item: HomeSolutionTile, index: number) => {
            return <SolutionTile key={index} data={item} />;
          })}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[30px] mb-12 lg:mb-0 mt-12 lg:mt-[95px]">
        {data.buttons.length > 0 &&
          data.buttons.map((item: ButtonProp, index: number) => {
            return <Button key={index} data={item} />;
          })}
      </div>
    </div>
  );
}
