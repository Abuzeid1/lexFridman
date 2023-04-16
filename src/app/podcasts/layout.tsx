import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import patreonLogo from "./logos/Patreon.svg";
import facebookLogo from "./logos/facebook.svg";
import instagramLogo from "./logos/instagram.svg";
import lexClipsLogo from "./logos/lexClips.jpg";
import linkedInLogo from "./logos/linkedIn.svg";
import mailListLogo from "./logos/mailingList.svg";
import paypalLogo from "./logos/paypal.svg";
import podcatsLogo from "./logos/podcast.svg";
import redditLogo from "./logos/reddit.svg";
import rssLogo from "./logos/rss.svg";
import spotifyLogo from "./logos/spotify.svg";
import twitterLogo from "./logos/twitter.svg";
import youtubeLogo from "./logos/youtube.svg";
import Nav from "./nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section>
        <PrimaryHeader>Lex Fridman Podcast</PrimaryHeader>
        <Paragraph>
          Conversations about the nature of intelligence, consciousness, love,
          and power.
        </Paragraph>

        <SecondaryHeader className="mb-6 mt-14">Follow Us</SecondaryHeader>
        <IconsList icons={socialIcons} />

        <SecondaryHeader className="mb-6 mt-14">Support Us</SecondaryHeader>
        <IconsList icons={supportIcons} />
      </section>

      <section>
        <h3 className="mb-5 font-serif text-3xl font-bold text-gray-900">
          Episodes
        </h3>
        <Nav />
        {children}
      </section>

      <section className="mx-auto max-w-4xl ">
        <PrimaryHeader>Thank You</PrimaryHeader>
        <Paragraph>
          I am forever grateful for the wisdom and love I&apos;ve encountered in
          the meandering journey of doing these conversations. I can honestly
          say that I can die a happy man having had the chance to pause and
          witness so many moments of magic, at once fleeting and unforgettable.
          Thank you.
        </Paragraph>
      </section>
    </>
  );
}

export const metadata = {
  title: "Lex podcasts",
};

const PrimaryHeader = ({ children }: { children: React.ReactNode }) => (
  <h1 className="mb-3 font-serif text-5xl text-gray-900">{children}</h1>
);

const SecondaryHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2 className={"text-3xl text-gray-800 " + (className || "")}>{children}</h2>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xl text-gray-700"> {children}</p>
);

const IconsList = ({
  icons,
}: {
  icons: { href: string; iconSrc: StaticImageData }[];
}) => (
  <ul className="mx-auto flex max-w-lg flex-wrap  justify-center gap-x-5 gap-y-10 ">
    {icons.map(({ href, iconSrc }) => (
      <li key={href}>
        <Link target="_blank" href={href}>
          <Image
            priority
            src={iconSrc}
            alt={href}
            className={
              "h-14 w-auto " + (iconSrc === lexClipsLogo ? "rounded-full" : "")
            }
          />
        </Link>
      </li>
    ))}
  </ul>
);

const supportIcons = [
  {
    href: "https://paypal.me/lexfridman",
    iconSrc: paypalLogo as StaticImageData,
  },
  {
    href: "https://www.patreon.com/lexfridman",
    iconSrc: patreonLogo as StaticImageData,
  },
];
const socialIcons = [
  {
    href: "https://www.youtube.com/@lexfridman/videos",
    iconSrc: youtubeLogo as StaticImageData,
  },
  {
    href: "https://www.youtube.com/lexclips",
    iconSrc: lexClipsLogo,
  },
  {
    href: "https://podcasts.apple.com/us/podcast/lex-fridman-podcast/id1434243584",
    iconSrc: podcatsLogo as StaticImageData,
  },
  {
    href: "https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL",
    iconSrc: spotifyLogo as StaticImageData,
  },
  {
    href: "https://lexfridman.com/feed/podcast/",
    iconSrc: rssLogo as StaticImageData,
  },
  {
    href: "https://twitter.com/LexFridman",
    iconSrc: twitterLogo as StaticImageData,
  },
  {
    href: "https://www.linkedin.com/in/lexfridman/",
    iconSrc: linkedInLogo as StaticImageData,
  },
  {
    href: "https://www.instagram.com/lexfridman/",
    iconSrc: instagramLogo as StaticImageData,
  },
  {
    href: "https://www.facebook.com/lexfridman",
    iconSrc: facebookLogo as StaticImageData,
  },
  {
    href: "https://www.reddit.com/r/lexfridman/",
    iconSrc: redditLogo as StaticImageData,
  },
  {
    href: "http://eepurl.com/dy1Obr",
    iconSrc: mailListLogo as StaticImageData,
  },
];
export { SecondaryHeader };
