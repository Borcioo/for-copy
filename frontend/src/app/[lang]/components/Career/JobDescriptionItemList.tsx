import { RequirementProps } from "@/app/[lang]/[...localeSlug]/components/layouts/CareerLayout";

export default function JobDescriptionItemList({
  data,
}: {
  data: RequirementProps;
}) {
  return (
    <div className="flex flex-col mt-[40px] px-8 lg:px-0 lg:mt-[56px]">
      <p className="text-base font-bold">{data.title}</p>
      <ul className="pl-[18px] mt-10 list-disc">
        {data.textList.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
