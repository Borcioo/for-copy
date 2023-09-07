export interface ButtonProp {
  text: string;
  url: string;
  hexColor: string;
  textHexColor: string;
}

export default function Button({ data }: { data: ButtonProp }) {
  return (
    <button
      className={`px-[32px] py-[15px] justify-center items-center flex flex-row gap-6`}
      style={{ backgroundColor: data.hexColor }}
    >
      {data.text && (
        <h2
          className={`font-bold text-base`}
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
