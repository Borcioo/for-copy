import SingleWorkTile from "@/app/[lang]/components/Home/WorksWith/SingleWorkTile";
import { useState } from "react";

export interface HomeWorksWithListProps {
  text: string;
}

export interface HomeWorksWithCompanyListProps {
  id: number;
  title: string;
  subTitle: string;
  textList: HomeWorksWithListProps[];
}

export interface HomeWorksWithProps {
  title: string;
  subTitle: string;
  description: string;
  list: HomeWorksWithListProps[];
  companyList: HomeWorksWithCompanyListProps[];
}

export default function HomeWorksWith({ data }: { data: HomeWorksWithProps }) {
  const [activeId, setActiveId] = useState<number>(-1);
  return (
    <div className="flex flex-col justify-center items-center mt-[77px] lg:mt-[102px] px-[32px] lg:px-0">
      {data.title && (
        <h2 className="text-[32px] leading-[122.5%] lg:text-[42px] lg:leading-[48px] font-bold">
          {data.title}
        </h2>
      )}
      <div className="lg:max-w-[1135px] w-full flex mt-[48px] lg:mt-[104px] flex-wrap justify-center items-start lg:justify-between">
        <div className="flex flex-col max-w-[486px]">
          {data.subTitle && (
            <h3 className="text-base lg:text-[32px] lg:leading-[122.5%] font-bold">
              {data.subTitle}
            </h3>
          )}
          {data.description && (
            <p className="text-[14px] lg:text-base mt-[29px]">
              {data.description}
            </p>
          )}
          <ul className="flex flex-col gap-[43px] mt-[37px] lg:mt-[67px]">
            {data.list.length > 0 &&
              data.list.map((item, index) => (
                <>
                  {item.text && (
                    <li
                      key={index}
                      className="flex gap-2 items-start justify-start flex-row"
                    >
                      <div className="lg:max-w-[16px] lg:max-h-[16px] lg:min-w-[16px] lg:min-h-[16px] max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] mt-1 bg-[#F00000]" />
                      <p className="text-[14px] lg:text-base">{item.text}</p>
                    </li>
                  )}
                </>
              ))}
          </ul>
        </div>
        <div className="w-[552px] flex flex-col gap-[16px] mt-[32px] lg:mt-[0]">
          {data.companyList.length > 0 &&
            data.companyList.map((item, index) => (
              <SingleWorkTile
                key={index}
                setActiveId={setActiveId}
                activeId={activeId}
                data={item}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
