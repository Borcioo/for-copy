import { CharacterProps } from "@/app/[lang]/[...localeSlug]/components/layouts/CareerLayout";
import CareerCharacterSingleValue from "@/app/[lang]/components/Career/CareerCharacterSingleValue";

interface CharacterGroupProps {
  data: {
    title: string;
    characters: CharacterProps[];
  };
}

export default function CareerCharacterValues({ data }: CharacterGroupProps) {
  return (
    <div className="flex justify-center items-center flex-col">
      {data.title && (
        <p className="font-bold text-[32px] px-[32px] text-center lg:text-[42px] mt-[95px] lg:mt-[189px]">
          {data.title}
        </p>
      )}
      {data.characters.length > 0 && (
        <div className="flex flex-wrap lg:gap-[30px] w-[311px] flex-col lg:flex-row lg:w-[1134px] mt-[33px] lg:mt-[95px]">
          {data.characters.map((item: CharacterProps, index: number) => (
            <CareerCharacterSingleValue key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
