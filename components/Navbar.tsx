import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-neutral-900/10 dark:border-neutral-50/[0.06] bg-white bg-white/75 dark:bg-neutral-900/75">
      <div className="px-8">
        <div className="flex items-center justify-between h-16">
          <ThemeToggler />

          <div className="space-x-4 font-semibold">
            <NavbarItem title="Home" url="/" />
          </div>

          <Avatar />
        </div>
      </div>
    </nav>
  );
}

const NavbarItem = ({ title, url }: { title: string; url: string }) => (
  <Link href={url} className="no-underline hover:underline">
    {title}
  </Link>
);

const Avatar = () => (
  <Link href="https://github.com/yxqsnz">
    <Image
      alt="Avatar image"
      src="https://github.com/yxqsnz.png"
      className="rounded-full h-12 w-12"
      width={38}
      height={38}
      loading="lazy"
      decoding="async"
    />
  </Link>
);
