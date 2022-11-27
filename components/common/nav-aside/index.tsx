import NavIconLink from "../link";
import {
  HomeIcon,
  UserIcon,
  BookOpenIcon,
  PencilIcon,
  CodeBracketIcon,
  PlayIcon,
} from "@heroicons/react/20/solid";

import { Twitter, Github, LinkedIn } from "@/components/common/icons";

type Nav = {
  id: number;
  name: string;
  href: string;
  icon: React.ReactElement;
};

const navs: Nav[] = [
  {
    id: 0,
    name: "Home",
    href: "/",
    icon: <HomeIcon className="w-5 h-5 " />,
  },
  {
    id: 1,
    name: "About",
    href: "/about",
    icon: <UserIcon className="w-5 h-5 " />,
  },
  {
    id: 2,
    name: "Articles",
    href: "/articles",
    icon: <PencilIcon className="w-5 h-5 " />,
  },
  {
    id: 3,
    name: "Snippets",
    href: "/snippets",
    icon: <CodeBracketIcon className="w-5 h-5 " />,
  },
  {
    id: 4,
    name: "Books",
    href: "/",
    icon: <BookOpenIcon className="w-5 h-5 " />,
  },
  {
    id: 5,
    name: "Videos",
    href: "/",
    icon: <PlayIcon className="w-5 h-5 " />,
  },
];

const social: Nav[] = [
  {
    id: 0,
    name: "LinkedIn",
    href: "/linkedIn",
    icon: <LinkedIn className="w-5 h-5 " />,
  },
  {
    id: 1,
    name: "Github",
    href: "/github",
    icon: <Github className="w-5 h-5 " />,
  },
  {
    id: 2,
    name: "Twitter",
    href: "/twitter",
    icon: <Twitter className="w-5 h-5 " />,
  },
];

function NavASide() {
  return (
    <aside className="hidden pointer-events-none lg:pointer-events-auto lg:flex flex-col border-r border-gray-800 gap-4 p-4 pt-6 mt-[5em] ">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 bg-transparent border border-gray-800 rounded-md outline-none placeholder:text-theme-accent"
      />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          {navs.map((nav) => (
            <NavIconLink key={nav.id} href={nav.href} icon={nav.icon}>
              {nav.name}
            </NavIconLink>
          ))}
        </div>
        <hr className="border border-gray-800 cursor-pointer" />
        <div className="flex flex-col gap-3 ">
          {social.map((nav) => (
            <NavIconLink key={nav.id} href={nav.href} icon={nav.icon}>
              {nav.name}
            </NavIconLink>
          ))}
        </div>
      </div>
    </aside>
  );
}
export default NavASide;