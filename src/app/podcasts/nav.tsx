"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

export default function Nav() {
  return (
    <ul className="mx-auto mb-14 flex w-max justify-center overflow-hidden rounded-2xl bg-gray-200 text-xl max-sm:flex-col sm:rounded-full ">
      {links.map((link) => (
        <NavLink key={link.title} {...link} />
      ))}
    </ul>
  );
}

const NavLink = ({ href, title }: { href: string; title: string }) => (
  <li>
    <Link
      className={
        "block px-8 py-4 " + (usePathname() == href ? "bg-gray-300" : "")
      }
      href={href}
    >
      {title}
    </Link>
  </li>
);

const links = [
  { href: "/podcasts", title: "Show Recent" },
  { href: "/podcasts/all", title: "Show All" },
  { href: "/podcasts/popular", title: "Show Popular" },
];
