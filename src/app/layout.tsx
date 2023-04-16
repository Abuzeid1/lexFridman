import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <header>
          <nav>
            <ul className="mx-auto flex max-w-7xl rounded-b-3xl bg-gray-200  text-lg text-gray-700  [&>:nth-child(3)]:bg-gray-300 [&>:nth-child(4)]:ml-auto">
              {links.map(({ href, title }, index) => (
                <li
                  key={title}
                  className={`${index > 0 ? "max-sm:hidden" : ""}`}
                >
                  <Link href={href} className="block px-6 py-4">
                    {title}
                  </Link>
                </li>
              ))}
              <li className="my-auto ml-auto grid gap-y-1 py-1 sm:hidden">
                <div className="mr-6 h-2 w-8 rounded-md bg-gray-700"></div>
                <div className="mr-6 h-2 w-8 rounded-md bg-gray-700"></div>
                <div className="mr-6 h-2 w-8 rounded-md bg-gray-700"></div>
              </li>
            </ul>
          </nav>
        </header>
        <main className="my-36 grid gap-y-36 text-center">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}

export const metadata = {
  title: "Lex Fridman",
  description: "an optimized version of lexfidman.com/podcasts",
};

const links = [
  { title: "Lex Fridman", href: "/podcasts" },
  { title: "Deep Learning", href: "/podcasts" },
  { title: "Podcast", href: "/podcasts" },
  { title: "YouTube", href: "https://www.youtube.com/@lexfridman/" },
  { title: "Twitter", href: "https://twitter.com/lexfridman/" },
];
