import { prisma } from "server/db";
import Image from "next/image";
import Link from "next/link";
import { Episode } from "@prisma/client";

export default function Body() {
  return (
    <div className="text-center">
      {/* @ts-expect-error Server Component */}
      <RecentEpisodes limit={60} />
    </div>
  );
}
const RecentEpisodes = async ({ limit }: { limit?: number }) => {
  const recentEpisodes = await prisma.episode.findMany({
    orderBy: { id: "asc" },
    take: limit,
  });
  return <EpisodesList episodes={recentEpisodes} />;
};
const EpisodesList = ({ episodes }: { episodes: Episode[] }) => {
  return (
    <ul className="mx-auto flex w-11/12 max-w-7xl flex-wrap justify-center gap-6 ">
      {episodes.map((el) => (
        <li key={el.id} className="w-56">
          <Link href={el.youtubeUrl}>
            <Image
              src={el.imgUrl}
              width="210"
              height="118"
              alt={el.title}
              className="h-auto w-full rounded-t-lg"
            />
          </Link>
          <Link href={"/podcasts/" + encodeURIComponent(el.characterName)}>
            <span className="mt-4 block text-sm text-gray-500">
              {el.characterName}
            </span>
          </Link>
          <span className="block text-lg text-gray-700">{el.title}</span>
        </li>
      ))}
    </ul>
  );
};

export { EpisodesList, RecentEpisodes };
