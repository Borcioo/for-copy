export default function ApplyButton({applyButtonData}: { applyButtonData: { title: string, text: string } }) {
    return (
        <div
            className="absolute right-[32px] w-[207px] h-[160px] py-6 pl-6 pr-3 flex flex-col gap-[16px] lg:gap-[36px] lg:right-0 lg:py-[27px] lg:pl-[30px] lg:pr-[18px] -top-[140px] lg:top-auto lg:-bottom-[300px] lg:w-[321px] lg:h-[220px] bg-[#F00000]">
            <p className="font-bold lg:text-[32px] leading-[122%] text-white text-left">
                {applyButtonData.title}
            </p>
            <button className="flex gap-4 w-fit px-6 py-[15px] bg-black flex-row">
                <p className="text-base font-bold text-white">
                    {applyButtonData.text}
                </p>
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H4V4H0V0Z" fill="white"/>
                    <path d="M4 4H8V8H4V4Z" fill="white"/>
                    <path d="M8 8H12V12H8V8Z" fill="white"/>
                    <path d="M4 12H8V16H4V12Z" fill="white"/>
                    <path d="M0 16H4V20H0V16Z" fill="white"/>
                </svg>

            </button>
        </div>
    )
}