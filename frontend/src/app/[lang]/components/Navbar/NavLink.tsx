import { usePathname } from "next/navigation";
import Link from "next/link";

export interface NavLinkType {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  setIsHamburgerClicked?: (value: boolean) => void;
  isHamburgerClicked?: boolean;
}

export function NavLink({
  url,
  text,
  setIsHamburgerClicked,
  isHamburgerClicked,
}: {
  url: NavLinkType["url"];
  text: NavLinkType["text"];
  setIsHamburgerClicked?: NavLinkType["setIsHamburgerClicked"];
  isHamburgerClicked?: NavLinkType["isHamburgerClicked"];
}) {
  const path = usePathname();
  const currentPath = path.replace(/^\/[a-z]{2}\//, "/");
  return (
    <li
      className={`flex ${currentPath === url && "border-[#F00000]"} ${
        currentPath !== url && "border-transparent"
      } text-xs border py-3 hover:text-red-500 px-4`}
    >
      <Link
        href={url}
        onClick={() => {
          if (isHamburgerClicked) {
            if (setIsHamburgerClicked) {
              setIsHamburgerClicked(false);
            }
          }
        }}
        className={`flex items-center  -mb-1" ${
          path === url && "text-violet-400 border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}
