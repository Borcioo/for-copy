import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import { ButtonProp } from "@/app/[lang]/components/Reusable/Components/Button";
import SingleCaseTile from "@/app/[lang]/components/CaseStudy/SingleCaseTile";
import { searchType } from "@/app/[lang]/components/CaseStudy/SearchBar";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export interface ProjectDetailProp {
  title: string;
  description: string;
}

export interface DescriptionItem {
  text: string;
}

export interface ChapterProp {
  title: string;
  subTitle: string;
  description: string;
}

export interface CasePersonProp {
  name: string;
  position: string;
  description: string;
  image: ImageProp;
}

export interface caseListProp {
  text: string;
  image: ImageProp;
}

export interface CasePointProps {
  title: string;
  subTitle: string;
  description: string;
  image: ImageProp;
  caseList: caseListProp[];
}

export interface CaseMainSectionProps {
  customId: number;
  company: string;
  title: string;
  caseTitle: string;
  type: string;
  image: ImageProp;
  buttons: ButtonProp[];
  projectDetails: ProjectDetailProp[];
  descriptionList: DescriptionItem[];
  descriptionListSecond: DescriptionItem[];
  chapters: ChapterProp[];
  casePerson: CasePersonProp;
  casePoints: CasePointProps[];
}

export interface MainProps {
  points: CaseMainSectionProps[];
  activeOption: searchType;
}

export default function CaseMainSection({ points, activeOption }: MainProps) {
  const tileList =
    activeOption.text === "ALL"
      ? points
      : points.filter((item) => item.type === activeOption.text);

  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  return (
    <div
      ref={parent}
      className="w-full mt-[31px] md:mt-[120px] flex flex-col items-center gap-6 md:gap-[151px] mb-[56px] md:mb-[102px]"
    >
      {tileList.length > 0 &&
        tileList.map((item, index) => (
          <SingleCaseTile data={item} index={index} key={index} />
        ))}
    </div>
  );
}
