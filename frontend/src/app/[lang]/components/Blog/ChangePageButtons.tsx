import { useState } from "react";

export default function ChangePageButtons({
  buttonsCount,
  setBeg,
  setEnd,
}: {
  buttonsCount: number;
  setBeg: (number: number) => void;
  setEnd: (number: number) => void;
}) {
  const buttonArray = [...Array(buttonsCount)].map((_, index) => index + 1);
  const [activeButtonIndex, setActiveButtonIndex] = useState(1);
  const renderButton = (buttonIndex: number) => {
    return (
      <button
        onClick={() => {
          setActiveButtonIndex(buttonIndex);
          setBeg(buttonIndex * 6 - 6);
          setEnd(buttonIndex * 6);
          window.scrollTo({
            top: 200,
            left: 0,
            behavior: "smooth",
          });
        }}
        className={`border-[1px] ease-in-out duration-300 ${
          activeButtonIndex === buttonIndex &&
          "font-bold bg-[#F00000] border-[#F00000] text-white"
        } flex items-center justify-center w-[36px] h-[36px]`}
      >
        {buttonIndex && <p>{buttonIndex}</p>}
      </button>
    );
  };

  return (
    <div className="flex flex-row gap-4 mt-[73px]">
      {buttonArray.map((buttonIndex) => (
        <div key={buttonIndex}>{renderButton(buttonIndex)}</div>
      ))}
    </div>
  );
}
