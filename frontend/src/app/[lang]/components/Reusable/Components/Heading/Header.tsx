import React from "react";

interface HeaderProps {
  data: {
    id: number;
    title: string;
    description: string;
    from: string;
    to: string;
  };
  children?: React.ReactNode;
}

export default function Header({ data, children }: HeaderProps) {
  const { title, from, to, description } = data;

  return (
    <div className="flex w-full flex-col items-center justify-center mt-24">
      {title && <p className="text-[42px] leading-[48px] font-bold">{title}</p>}
      <div className="flex flex-row gap-2 justify-center items-center mt-8">
        {from && <p className="text-base font-bold">{from}</p>}
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 9.85714V12.1429H15.5V14.4286H13.25V16.7143H15.5V14.4286H17.75V12.1429H20V9.85714H17.75V7.57143H15.5V5.28571H13.25V7.57143H15.5V9.85714H2Z"
            fill="black"
          />
        </svg>
        {to && <p className="text-[#F00000] font-bold text-base">{to}</p>}
      </div>
      {description && (
        <p className="max-w-[805px] pl-8 pr-8 lg:px-0 w-full mt-[40px] flex-wrap break-words text-center text-base">
          {description}
        </p>
      )}

      {children && <>{children}</>}
      {description && (
        <svg
          className="mt-12 w-[52px] h-[64px] flex justify-center items-center"
          width="52"
          height="64"
          viewBox="0 0 52 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2857 18H11V22.5H15.2857V27H19.5714V31.5H23.8571V36H28.1429V31.5H32.4286V27H36.7143V22.5H41V18H36.7143V22.5H32.4286V27H28.1429V31.5H23.8571V27H19.5714V22.5H15.2857V18Z"
            fill="black"
          />
          <path
            d="M15.2857 29H11V33.5H15.2857V38H19.5714V42.5H23.8571V47H28.1429V42.5H32.4286V38H36.7143V33.5H41V29H36.7143V33.5H32.4286V38H28.1429V42.5H23.8571V38H19.5714V33.5H15.2857V29Z"
            fill="#F00000"
          />
        </svg>
      )}
    </div>
  );
}
