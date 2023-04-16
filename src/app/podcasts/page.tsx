import { type Episode } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "server/db";

export default function Body() {
  return (
    <div>
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
const EpisodesList = ({ episodes }: { episodes: Episode[] }) => (
  <ul className="mx-auto flex w-9/12 max-w-7xl flex-wrap justify-center gap-x-4 gap-y-10 rounded-2xl px-10 py-20 shadow-2xl shadow-gray-400 md:w-11/12">
    {episodes.map((el) => (
      <li key={el.id} className="w-56">
        <Link href={el.youtubeUrl} target="_blank">
          <Image
            src={el.imgUrl}
            width="210"
            height="118"
            alt={el.title}
            className="w-full rounded-t-lg"
          />
        </Link>
        <Link href={"/podcasts/" + encodeURIComponent(el.characterName)}>
          <span className="mt-4 block text-sm text-gray-500">
            {el.characterName}
          </span>
        </Link>
        <span className="text-lg text-gray-700">{el.title}</span>
      </li>
    ))}
  </ul>
);

export { EpisodesList, RecentEpisodes };
