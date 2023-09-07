"use client";
import Logo from "../Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavbarHamburger from "./NavbarHamburger";
import LanguageSwitch from "@/app/[lang]/components/Navbar/LanguageSwitch";
import { NavLink } from "@/app/[lang]/components/Navbar/NavLink";

interface NavLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
}

export default function Navbar({
  links,
  logoUrl,
  logoText,
  onlyHamburgerMenu,
}: {
  links: Array<NavLink>;
  logoUrl: string | null;
  logoText: string | null;
  onlyHamburgerMenu: boolean;
}) {
  const hamburgerClass = onlyHamburgerMenu === true ? "" : "lg:hidden";
  const [isHamburgerClicked, setIsHamburgerClicked] = useState<boolean>(false);
  const options = [{ value: "PL" }, { value: "EN" }];
  const [selectedValue, setSelectedValue] = useState<string>("PL");
  const path = usePathname();

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 1024) {
        if (isHamburgerClicked) {
          setIsHamburgerClicked(false);
        }
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <div className={`ah-max px-6 text-gray-900 w-full max-w-[1404px] mx-auto`}>
      <div
        className={`container justify-between flex mx-auto px-0 pt-6 sm:px-6 lg:justify-center`}
      >
        <Logo src={logoUrl}>
          {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
        </Logo>
        {!onlyHamburgerMenu === true && (
          <div className={`items-center flex-shrink-0 hidden lg:flex`}>
            <div>
              <ul
                className={`items-center hidden lg:flex px-[50px] foretoHome:px-[155px]`}
              >
                {links.slice(0, 5).map((item: NavLink) => (
                  <NavLink key={item.id} {...item} />
                ))}
              </ul>
            </div>
            <div>
              <ul className="flex gap-[12px]">
                <li className="border-[#F00000] border-[1px] py-[11px] w-[130px] flex items-center justify-center">
                  <Link href={links[5].url}>
                    <p className="text-xs">{links[5].text}</p>
                  </Link>
                </li>
                <li className="w-[130px] py-[11px] flex items-center justify-center bg-[#F00000]">
                  <Link href={links[6].url}>
                    {" "}
                    <p className="text-white font-bold text-xs">
                      {links[6].text}
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center pl-[67px] w-fit text-xs border py-3 border-transparent">
              <LanguageSwitch
                navType={"normal"}
                options={options}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                path={path}
              />
            </div>
          </div>
        )}
        <button
          className={` ${hamburgerClass} flex justify-end items-center`}
          onClick={() => {
            setIsHamburgerClicked(!isHamburgerClicked);
          }}
        >
          <svg
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 0H0V3H24V0ZM24 6H0V9H24V6ZM0 12H24V15H0V12ZM24 18H0V21H24V18Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <NavbarHamburger
        links={links}
        isHamburgerClicked={isHamburgerClicked}
        setIsHamburgerClicked={setIsHamburgerClicked}
        options={options}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        path={path}
      />
    </div>
  );
}
