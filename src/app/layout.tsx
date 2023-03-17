import "./globals.css";
import Link from "next/link";
import Nav from "./podcasts/nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul className="text-l mx-auto flex  max-w-7xl list-none  rounded-b-3xl bg-gray-200  px-5  text-gray-700 [&>:nth-child(3)]:bg-gray-300  [&>:nth-child(4)]:ml-auto [&_a]:block [&_a]:p-5">
              {links.map(({ href, title }) => (
                <li key={href}>
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="my-36 grid gap-y-36 text-center">{children}</main>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Lex Fridman",
};

const links = [
  { title: "Lex Fridman", href: "#" },
  { title: "Deep Learning", href: "#" },
  { title: "Lex Fridman Podcast", href: "/podcasts" },
  { title: "YouTube", href: "https://www.youtube.com/@lexfridman/" },
  { title: "Twitter", href: "https://twitter.com/lexfridman/" },
];
