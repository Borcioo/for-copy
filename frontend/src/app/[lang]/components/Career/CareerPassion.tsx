interface PassionProps {
  data: {
    id: number;
    textBegin: string;
    textCenter: string;
    textEnd: string;
    description: string;
  };
}

export default function CareerPassion({ data }: PassionProps) {
  return (
    <div className="flex lg:gap-[92px] gap-4 justify-center flex-wrap mt-[88px] lg:mt-[183px]">
      <p className="font-bold text-[28px] leading-[122.5%] lg:text-[42px] w-[311px] lg:w-[500px] overflow-y-hidden h-fit lg:leading-[0.9]">
        {data.textBegin && (
          <span className="leading-[45px]">{data.textBegin}</span>
        )}
        {data.textCenter && (
          <span className="leading-[45px] text-[#F00000]">
            {data.textCenter}
          </span>
        )}
        {data.textEnd && <span className="leading-[45px]">{data.textEnd}</span>}
      </p>
      {data.description && (
        <p className="text-black text-base w-[311px] lg:w-[445px] lg:pt-4">
          {data.description}
        </p>
      )}
    </div>
  );
}
