import { ButtonProp } from "@/app/[lang]/components/Reusable/Components/Button";
import { useRouter } from "next/navigation";
interface Props {
  data: ButtonProp;
  index: number;
  customId: number;
}

export default function CaseButton({ data, index, customId }: Props) {
  const router = useRouter();
  const handleClick = () => {
    if (index === 0) {
      const url = `/case-studies/${customId}`;
      router.push(url);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex flex-row justify-center items-center gap-2`}
      style={{ backgroundColor: data.hexColor }}
    >
      {data.text && (
        <h2
          className={`font-bold text-[14px] md:text-base`}
          style={{ color: data.textHexColor }}
        >
          {data.text}
        </h2>
      )}
      <svg
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H4V4H0V0Z" fill={data.textHexColor} />
        <path d="M4 4H8V8H4V4Z" fill={data.textHexColor} />
        <path d="M8 8H12V12H8V8Z" fill={data.textHexColor} />
        <path d="M4 12H8V16H4V12Z" fill={data.textHexColor} />
        <path d="M0 16H4V20H0V16Z" fill={data.textHexColor} />
      </svg>
    </button>
  );
}
