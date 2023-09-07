interface ChapterProp {
  title: string;
  subTitle: string;
  description: string;
}

export default function Chapter(data: ChapterProp) {
  return (
    <div className="w-[375px] md:w-[358px] h-[200px] md:h-[432px] pt-4 md:pt-0 px-[32px] md:px-0 gap-[15px] md:gap-0 shadow-xl flex md:items-center flex-row md:flex-col">
      <div className="flex flex-col">
        <p className="text-[#F00000] font-bold md:mt-[32px] text-[64px]">
          {data.title}
        </p>
        <p className="font-bold text-center text-base">{data.subTitle}</p>
      </div>
      <p className="text-[14px] md:text-base mt-[20px] md:mt-[59px] md:px-[50px] ">
        {data.description}
      </p>
    </div>
  );
}
