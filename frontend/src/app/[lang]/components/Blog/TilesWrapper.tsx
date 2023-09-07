"use client";

import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import { ButtonProp } from "@/app/[lang]/components/Reusable/Components/Button";
import BlogTile from "@/app/[lang]/components/Blog/BlogTile";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export interface BlogTileProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: ImageProp;
  buttons: ButtonProp[];
}
export interface BlogProps {
  blogs: BlogTileProps[];
}

export default function TilesWrapper({
  data,
  beg,
  end,
}: {
  data: BlogProps;
  beg: number;
  end: number;
}) {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  return (
    <div
      ref={parent}
      className="flex  flex-row items-center justify-center md:items-baseline flex-wrap w-full md:max-w-[1154px] gap-[29px]"
    >
      {data.blogs.length > 0 &&
        data.blogs
          .slice(beg, end)
          .map((blog, index) => <BlogTile key={index} data={blog} />)}
    </div>
  );
}
