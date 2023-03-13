import Link from "next/link";
import Image from "next/image";
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
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="text-center font-serif">
        <h1 className="mt-20 py-2 text-4xl text-gray-900">
          Lex Fridman Podcast
        </h1>
        <p className=" text-xl text-gray-700">
          Conversations about the nature of intelligence, consciousness, love,
          and power.
        </p>

        <h2 className=" mt-20 mb-8 text-2xl text-gray-800">Follow Us</h2>
        <ul className="mx-auto flex w-[min(90%,43rem)] flex-wrap content-center justify-center gap-8 [&_img]:inline [&_img]:h-16 [&_img]:w-auto ">
          <li>
            <Link
              target="_blank"
              href="https://www.youtube.com/lexfridman"
              className=""
            >
              <Image
                src={youtubeLogo}
                alt="Lex Fridman YouTube channel 
              "
              />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://www.youtube.com/lexclips">
              <Image
                src={lexClipsLogo}
                alt="Lex Clips YouTube channel "
                className="rounded-full"
              />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://podcasts.apple.com/us/podcast/lex-fridman-podcast/id1434243584"
            >
              <Image src={podcatsLogo} alt="Lex Fridman apple podcast " />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL"
            >
              <Image src={spotifyLogo} alt="Lex Fridman spotify Podcast" />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://lexfridman.com/feed/podcast/">
              <Image src={rssLogo} alt="Lex Fridman RSS Feed" />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://twitter.com/LexFridman">
              <Image src={twitterLogo} alt="Lex Fridman twitter page " />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/lexfridman/"
            >
              <Image src={linkedInLogo} alt="Lex Fridman linkedIn profile " />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://www.instagram.com/lexfridman/">
              <Image src={instagramLogo} alt="Lex Fridman instagram page " />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://www.facebook.com/lexfridman">
              <Image src={facebookLogo} alt="Lex Fridman Facebook page " />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://www.reddit.com/r/lexfridman/">
              <Image src={redditLogo} alt="Lex Fridman reddit subreddit " />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="http://eepurl.com/dy1Obr">
              <Image src={mailListLogo} alt="Lex Fridman mail list" />
            </Link>
          </li>
        </ul>
        <h3 className="mt-20 mb-8 text-2xl text-gray-800"> Support Us</h3>
        <ul className="mx-auto flex w-[min(90%,43rem)] flex-wrap content-center justify-center gap-8 [&_img]:inline [&_img]:h-16 [&_img]:w-auto ">
          <li>
            <Link target="_blank" href="https://www.patreon.com/lexfridman">
              <Image src={paypalLogo} alt="Support at us with PayPal" />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://paypal.me/lexfridman">
              <Image src={patreonLogo} alt="Support at us with Patreon" />
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
}
