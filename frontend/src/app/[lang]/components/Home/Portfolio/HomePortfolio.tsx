import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import PortfolioTile from "@/app/[lang]/components/Home/Portfolio/PortfolioTile";
import Button, {
  ButtonProp,
} from "@/app/[lang]/components/Reusable/Components/Button";

export interface HomePortfolioTile {
  name: string;
  buttonText: string;
  values: string;
  image: ImageProp;
}

export interface HomePortfolioProps {
  title: string;
  tiles: HomePortfolioTile[];
  buttons: ButtonProp[];
}

export default function HomePortfolio({ data }: { data: HomePortfolioProps }) {
  return (
    <div className="flex justify-center items-center flex-col bg-[#F6F6F6] lg:py-20">
      {data.title && (
        <h2 className="text-[32px] leading-[122.5%] lg:text-[42px] lg:leading-[48px] mb-[32px] lg:mb-[46px] mt-[48px] lg:mt-0 font-bold">
          {data.title}
        </h2>
      )}
      <div className="flex flex-wrap items-center justify-center  w-full max-w-[1154px] gap-[30px]">
        {data.tiles.length > 0 &&
          data.tiles.map((item: HomePortfolioTile, index: number) => {
            return <PortfolioTile key={index} data={item} />;
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
