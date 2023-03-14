import { prisma } from "server/db";
import Image from "next/image";
import Link from "next/link";
import { Episode } from "@prisma/client";

export default async function Body() {
  const episodes = await prisma.episode.findMany({
    orderBy: { id: "asc" },
    take: 5,
  });
  const popularEpisodes = await prisma.episode.findMany({
    where: { id: { in: popularEpisodesIds } },
  });
  return (
    <div className="text-center">
      <div className="mx-auto flex  w-[min(95%,80rem)] flex-wrap justify-center gap-6 text-center">
        {episodes.map((el) => EpisodeElement(el))}
      </div>
      <h2 className="mb-14 mt-14 text-3xl text-gray-900">Popular Episodes</h2>

      <div className="mx-auto flex  w-[min(95%,80rem)] flex-wrap justify-center gap-6 text-center">
        {popularEpisodesIds.map((id) => {
          const el = popularEpisodes.find((el) => el.id == id);
          return el ? EpisodeElement(el) : null;
        })}
      </div>
    </div>
  );
}
const EpisodeElement = (el: Episode) => {
  return (
    <div key={el.id} className=" w-56 ">
      <Link href={el.youtubeUrl}>
        <Image
          src={el.imgUrl}
          width="210"
          height="118"
          alt={el.title}
          className="h-auto w-full rounded-t-lg"
          priority={el.id < 5 ? true : false}
        />
      </Link>
      <span className="mt-4 block text-sm text-gray-500">
        {el.characterName}
      </span>
      <span className="block  text-lg text-gray-700">{el.title}</span>
    </div>
  );
};

const popularEpisodesIds = [
  313, 300, 252, 122, 310, 336, 185, 345, 276, 293, 332, 136, 188, 154, 267, 45,
  355, 301, 208, 351, 286, 127, 272, 137, 194,
].map((el) => 365 - el);

export { EpisodeElement, popularEpisodesIds };
