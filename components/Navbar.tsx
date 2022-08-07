import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import { AiFillHome } from 'react-icons/ai'
import Avatar from "./Avatar";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur flex-none lg:z-50 lg:border-b lg:border-neutral-900/10 dark:border-neutral-50/[0.06] bg-white bg-white/75 dark:bg-neutral-900/75">
      <div className="px-8">
        <div className="flex items-center justify-between h-16">
          <ThemeToggler />

          <div className="relative space-x-4 font-semibold">
            <NavbarItem icon={<AiFillHome />} name="Home" url="/" />
          </div>

          <Avatar />
        </div>
      </div>
    </nav>
  );
}

const NavbarItem = ({ icon, name, url }: { icon: React.ReactNode; name: string; url: string }) => (
  <Link href={url}>
    <a>
      <div className="flex justify-center text-center items-center  hover:text-pink-400 rounded-md border dark:bg-neutral-900/2 dark:border-neutral-50/[0.06] px-4 py-2 transition ease-in-out delay-75 hover:bg-base-200 duration-300">
        <p> {icon} </p>
        <p className="pl-2"> {name} </p>
      </div>
    </a>
  </Link>
);
