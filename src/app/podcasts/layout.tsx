import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import youtubeLogo from "./logos/youtube.svg";
import facebookLogo from "./logos/facebook.svg";
import twitterLogo from "./logos/twitter.svg";
import instagramLogo from "./logos/instagram.svg";
import redditLogo from "./logos/reddit.svg";
import linkedInLogo from "./logos/linkedIn.svg";
import podcatsLogo from "./logos/podcast.svg";
import spotifyLogo from "./logos/spotify.svg";
import rssLogo from "./logos/rss.svg";
import mailListLogo from "./logos/mailingList.svg";
import lexClipsLogo from "./logos/lexClips.jpg";
import paypalLogo from "./logos/paypal.svg";
import patreonLogo from "./logos/Patreon.svg";
import Nav from "./nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="text-center font-serif">
        <PrimaryHeader className="mt-28">Lex Fridman Podcast</PrimaryHeader>
        <Paragraph>
          Conversations about the nature of intelligence, consciousness, love,
          and power.
        </Paragraph>

        <SecondaryHeader>Follow Us</SecondaryHeader>
        <IconsList
          icons={socialIcons}
          className="[&>:nth-child(2)_img]:rounded-full"
        />

        <SecondaryHeader>Support Us</SecondaryHeader>
        <IconsList icons={supportIcons} />

        <h3 className="mb-5 mt-28 text-3xl text-gray-900">Episodes</h3>

        <Nav />
      </div>

      {children}
      <div className="mx-auto my-28 max-w-4xl text-center">
        <PrimaryHeader>Thank You</PrimaryHeader>
        <Paragraph>
          I am forever grateful for the wisdom and love I&apos;ve encountered in
          the meandering journey of doing these conversations. I can honestly
          say that I can die a happy man having had the chance to pause and
          witness so many moments of magic, at once fleeting and unforgettable.
          Thank you.
        </Paragraph>
      </div>
    </>
  );
}

const PrimaryHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={"text-4xl text-gray-900 " + (className || "")}>
      {children}
    </h1>
  );
};

const SecondaryHeader = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="mt-14 mb-5 text-2xl text-gray-800"> {children}</h2>;
};

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-xl text-gray-700"> {children}</p>;
};

const IconsList = ({
  icons,
  className,
}: {
  icons: { href: string; iconSrc: StaticImageData }[];
  className?: string;
}) => {
  return (
    <ul
      className={
        "mx-auto flex w-[min(90%,40rem)] flex-wrap content-center justify-center gap-7 [&_img]:inline [&_img]:h-14 [&_img]:w-auto " +
        (className || "")
      }
    >
      {icons.map(({ href, iconSrc }) => (
        <li key={href}>
          <Link target="_blank" href={href}>
            <Image priority src={iconSrc} alt="Lex Fridman Facebook page " />
          </Link>
        </li>
      ))}
    </ul>
  );
};

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
    href: "https://paypal.me/lexfridman",
    iconSrc: youtubeLogo as StaticImageData,
  },
  {
    href: "https://paypal.me/lexfridman",
    iconSrc: lexClipsLogo,
  },
  {
    href: "https://paypal.me/lexfridman",
    iconSrc: podcatsLogo as StaticImageData,
  },
  {
    href: "https://paypal.me/lexfridman",
    iconSrc: spotifyLogo as StaticImageData,
  },
  {
    href: "https://paypal.me/lexfridman",
    iconSrc: rssLogo as StaticImageData,
  },
  {
    href: "https://paypal.me/lexfridman",
    iconSrc: twitterLogo as StaticImageData,
  },
  {
    href: "https://paypal.me/lexfridman",
    iconSrc: linkedInLogo as StaticImageData,
  },
  {
    href: "https://paypal.me/lexfridman",
    iconSrc: instagramLogo as StaticImageData,
  },
  {
    href: "https://paypal.me/lexfridman",
    iconSrc: facebookLogo as StaticImageData,
  },
  {
    href: "https://paypal.me/lexfridman",
    iconSrc: redditLogo as StaticImageData,
  },
  {
    href: "https://paypal.me/lexfridman",
    iconSrc: mailListLogo as StaticImageData,
  },
];
