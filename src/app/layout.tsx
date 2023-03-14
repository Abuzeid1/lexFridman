import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Lex Fridman</title>
      </head>
      <body>
        <header>
          <nav>
            <ul className="text-l mx-auto flex w-[min(100%,80rem)] list-none  rounded-b-3xl bg-gray-200  px-5  text-gray-700 [&_a]:block [&_a]:p-5">
              <li>
                <Link href="#">Lex Fridman</Link>
              </li>

              <li>
                <Link href="#">Deep Learning</Link>
              </li>

              <li>
                <Link href="/podcasts" className="bg-gray-300 ">
                  Lex Fridman Podcast
                </Link>
              </li>

              <li className="ml-auto">
                <Link href="https://www.youtube.com/@lexfridman/">YouTube</Link>
              </li>

              <li>
                <Link href="https://twitter.com/lexfridman/">Twitter</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
