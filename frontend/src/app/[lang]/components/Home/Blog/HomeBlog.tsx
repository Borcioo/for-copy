import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import Button, {
  ButtonProp,
} from "@/app/[lang]/components/Reusable/Components/Button";

import SingleBlog from "@/app/[lang]/components/Home/Blog/SingleBlog";

export interface SingleBlogProps {
  name: string;
  buttonText: string;
  description: string;
  image: ImageProp;
}

export interface HomeBlogProps {
  title: string;
  buttons: ButtonProp[];
  tiles: SingleBlogProps[];
}

export default function HomeBlog({ data }: { data: HomeBlogProps }) {
  return (
    <div className="flex justify-center items-center flex-col lg:py-20">
      {data.title && (
        <h2 className="text-[32px] leading-[122.5%] lg:text-[42px] lg:leading-[48px] mb-[48px] lg:mb-[46px] mt-[80px] lg:mt-0 font-bold">
          {data.title}
        </h2>
      )}
      <div className="flex flex-wrap items-center justify-center  w-full max-w-[1154px] gap-[30px]">
        {data.tiles.length > 0 &&
          data.tiles.map((item: SingleBlogProps, index: number) => {
            return <SingleBlog key={index} data={item} />;
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
