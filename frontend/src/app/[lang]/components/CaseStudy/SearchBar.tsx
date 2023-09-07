export interface searchType {
  text: string;
}

export interface SearchBarProps {
  searchTypes: searchType[];
}

export interface SearchProps {
  data: SearchBarProps;
  activeOption: searchType;
  handleOptionClick: (type: searchType) => void;
}

export default function SearchBar({
  data,
  activeOption,
  handleOptionClick,
}: SearchProps) {
  return (
    <div className="hidden lg:flex w-full bg-[#F6F6F6] mt-[84px] gap-[116px] justify-center items-center">
      {data.searchTypes.length > 0 &&
        data.searchTypes.map((item, index) => (
          <>
            {item.text && (
              <button
                key={index}
                onClick={() => handleOptionClick(item)}
                className={`ease-in-out duration-200 text-black text-[14px] font-bold py-[12px] leading-[21px]`}
                style={{
                  color: item.text === activeOption.text ? "#F00000" : "black",
                }}
              >
                {item.text}
              </button>
            )}
          </>
        ))}
    </div>
  );
}
