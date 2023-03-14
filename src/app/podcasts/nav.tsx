"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

export default function Nav() {
  return (
    <ul className="mx-auto mb-16 flex w-max justify-center rounded-full bg-gray-200 text-xl [&_a]:block [&_a]:py-4 [&_a]:px-8">
      <li>
        <Link
          className={
            (usePathname() == "/podcasts" ? "bg-gray-300" : "") +
            " rounded-l-full"
          }
          href="/podcasts"
        >
          Show Recent
        </Link>
      </li>
      <li>
        <Link
          className={usePathname() == "/podcasts/all" ? "bg-gray-300" : ""}
          href="/podcasts/all"
        >
          Show All
        </Link>
      </li>
      <li>
        <Link
          className={
            (usePathname() == "/podcasts/popular" ? "bg-gray-300" : "") +
            " rounded-r-full"
          }
          href="/podcasts/popular"
        >
          Show Popular
        </Link>
      </li>
    </ul>
  );
}
