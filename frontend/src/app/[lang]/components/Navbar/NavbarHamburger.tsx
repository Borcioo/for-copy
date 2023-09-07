import LanguageSwitch from "@/app/[lang]/components/Navbar/LanguageSwitch";
import { NavLinkType, NavLink } from "@/app/[lang]/components/Navbar/NavLink";

export default function NavbarHamburger({
  links,
  isHamburgerClicked,
  setIsHamburgerClicked,
  options,
  selectedValue,
  setSelectedValue,
  path,
}: {
  links: Array<NavLinkType>;
  isHamburgerClicked: boolean;
  setIsHamburgerClicked: (type: boolean) => void;
  options: Array<{ value: string }>;
  selectedValue: string;
  setSelectedValue: (lang: string) => void;
  path: string;
}) {
  return (
    <div
      className={`top-0 ease-in-out duration-300 z-50 bg-white w-full h-full flex flex-col items-end fixed ${
        isHamburgerClicked ? "right-[0]" : "right-[-100%] opacity-0"
      }`}
    >
      <button
        className="p-4 mr-16 mt-6 flex items-center"
        onClick={() => {
          setIsHamburgerClicked(false);
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="4" height="4" fill="black" />
          <rect x="4" y="4" width="4" height="4" fill="black" />
          <rect x="8" y="8" width="4" height="4" fill="black" />
          <rect x="4" y="12" width="4" height="4" fill="black" />
          <rect y="16" width="4" height="4" fill="black" />
          <rect x="12" y="12" width="4" height="4" fill="black" />
          <rect x="16" y="16" width="4" height="4" fill="black" />
          <rect x="12" y="4" width="4" height="4" fill="black" />
          <rect x="16" width="4" height="4" fill="black" />
        </svg>
      </button>
      <div className="mx-auto mt-10 items-center w-4/5 lg:flex">
        <ul className=" lg:flex sm:items-center">
          {links &&
            links.map((item: NavLinkType) => (
              <NavLink
                key={item.id}
                {...item}
                isHamburgerClicked={isHamburgerClicked}
                setIsHamburgerClicked={setIsHamburgerClicked}
              />
            ))}
          <LanguageSwitch
            navType={"hamburger"}
            options={options}
            selectedValue={selectedValue}
            path={path}
            setSelectedValue={setSelectedValue}
          />
        </ul>
      </div>
    </div>
  );
}
