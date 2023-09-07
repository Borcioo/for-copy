"use client";
import Header from "@/app/[lang]/components/Reusable/Components/Heading/Header";
import ValuesGroup, {
  ValuesGroupProps,
} from "@/app/[lang]/components/Reusable/Components/ValuesGroup";
import CareerPassion from "@/app/[lang]/components/Career/CareerPassion";
import CareerCharacterValues from "@/app/[lang]/components/Career/CareerCharacterValues";
import CareerJobOffers from "@/app/[lang]/components/Career/CareerJobOffers";
import { useState } from "react";
import CTA from "@/app/[lang]/components/Reusable/CTA/CTA";
import { ButtonProp } from "@/app/[lang]/components/Reusable/Components/Button";
import { HeaderProps } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import {
  pageDataProps,
  renderSection,
} from "@/app/[lang]/utils/custom-section-renderer";

/*MOTIVATE TEXT SECTION PROPS*/
export interface PassionProps {
  id: number;
  textBegin: string;
  textCenter: string;
  textEnd: string;
  description: string;
}

/*POTENTIAL EMPLOYEE PROPS*/

export interface CharacterProps {
  id: number;
  characterText: string;
  icon: {
    data: {
      id: string;
      attributes: {
        name: string;
        alternativeText: string;
        url: string;
      };
    };
  };
}

interface CareerCharacterGroupProps {
  title: string;
  characters: CharacterProps[];
}

export interface RequirementListProps {
  text: string;
}

export interface RequirementProps {
  title: string;
  textList: RequirementListProps[];
}

export interface SingleJobProps {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  footerNotes: string;
  additionalText: string;
  requirements: RequirementProps[];
}

export interface JobsProps {
  title: string;
  applyTitle: string;
  applyText: string;
  jobs: SingleJobProps[];
}

export interface RedBarProps {
  text: string;
  buttons: ButtonProp[];
  image: {
    data: {
      id: string;
      attributes: {
        name: string;
        alternativeText: string;
        url: string;
      };
    };
  };
}

/*FUNCTION*/

export default function CareerLayout({
  attributes,
}: {
  attributes: pageDataProps;
}) {
  const headerData: HeaderProps = renderSection(attributes, "sections.header");
  const careerValues: ValuesGroupProps = renderSection(
    attributes,
    "sections.value-group",
  );
  const careerPassion: PassionProps = renderSection(
    attributes,
    "sections.career-passion",
  );
  const careerCharacter: CareerCharacterGroupProps = renderSection(
    attributes,
    "sections.character-group",
  );
  const careerJobs: JobsProps = renderSection(
    attributes,
    "sections.jobs-group",
  );
  const redBarData: RedBarProps = renderSection(attributes, "sections.red-bar");
  const [activeTileId, setActiveTileId] = useState<number>(-1);

  return (
    <div className="flex flex-grow items-center flex-col">
      {headerData && <Header data={headerData} />}
      {careerValues && (
        <div className="mt-14">
          <ValuesGroup data={careerValues} />
        </div>
      )}
      {careerPassion && <CareerPassion data={careerPassion} />}
      {careerCharacter && <CareerCharacterValues data={careerCharacter} />}
      {careerJobs && (
        <CareerJobOffers
          data={careerJobs}
          activeTileId={activeTileId}
          setActiveTileId={setActiveTileId}
        />
      )}
      {redBarData && <CTA data={redBarData} />}
    </div>
  );
}
