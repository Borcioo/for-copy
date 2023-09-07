"use client";
import Value from "@/app/[lang]/components/Reusable/Components/Value";

export interface ValueProps {
  id: number;
  contentText: string;
  contentImage: {
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

export interface ValuesGroupProps {
  values: ValueProps[];
}

export default function ValuesGroup({ data }: { data: ValuesGroupProps }) {
  const firstId = data.values[0].id;
  return (
    <div className="flex flex-wrap gap-[30px] justify-center items-center box-border max-w-[1134px] w-full h-fit">
      {data.values.length > 0 &&
        data.values.map((item: ValueProps, index: number) => (
          <Value key={index} data={item} firstId={firstId} />
        ))}
    </div>
  );
}
