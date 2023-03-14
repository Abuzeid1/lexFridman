"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

export default function Nav() {
  return (
    <ul className="mx-auto mb-14 flex w-max justify-center overflow-hidden rounded-full bg-gray-200 text-xl [&_a]:block [&_a]:py-4 [&_a]:px-8">
      {links.map((link) => (
        <NavLink key={link.href} {...link} />
      ))}
    </ul>
  );
}

const NavLink = ({ href, title }: { href: string; title: string }) => {
  console.log(usePathname());
  return (
    <li>
      <Link className={usePathname() == href ? "bg-gray-300" : ""} href={href}>
        {title}
      </Link>
    </li>
  );
};

const links = [
  { href: "/podcasts", title: "Show Recent" },
  { href: "/podcasts/all", title: "Show All" },
  { href: "/podcasts/popular", title: "Show Popular" },
];
