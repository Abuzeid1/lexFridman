import { prisma } from "server/db";
import Image from "next/image";
import Link from "next/link";
import { Episode } from "@prisma/client";
import PopularEpisodes from "./popular/page";

export default async function Body() {
  const episodes = await prisma.episode.findMany({
    orderBy: { id: "asc" },
    take: 5,
  });
  return (
    <div className="text-center">
      <EpisodesList episodes={episodes} />
      <h2 className="mb-7 mt-14 font-serif text-3xl font-bold text-gray-900">
        Popular Episodes
      </h2>
      {/* @ts-expect-error Server Component */}
      <PopularEpisodes />
    </div>
  );
}

const EpisodesList = ({ episodes }: { episodes: Episode[] }) => {
  return (
    <div className="mx-auto flex w-11/12 max-w-7xl flex-wrap justify-center gap-6 text-center">
      {episodes.map((el) => (
        <div key={el.id} className="w-56">
          <Link href={el.youtubeUrl}>
            <Image
              src={el.imgUrl}
              width="210"
              height="118"
              alt={el.title}
              className="h-auto w-full rounded-t-lg"
            />
          </Link>
          <span className="mt-4 block text-sm text-gray-500">
            {el.characterName}
          </span>
          <span className="block text-lg text-gray-700">{el.title}</span>
        </div>
      ))}
    </div>
  );
};

export { EpisodesList };
