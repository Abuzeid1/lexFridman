import { prisma } from "server/db";
import { EpisodeElement, popularEpisodesIds } from "../page";

export default async function Body() {
  const popularEpisodes = await prisma.episode.findMany({
    where: { id: { in: popularEpisodesIds } },
  });
  return (
    <div className=" text-center">
      <div className="mx-auto flex  w-[min(95%,80rem)] flex-wrap justify-center gap-6 text-center">
        {popularEpisodesIds.map((id) => {
          const el = popularEpisodes.find((el) => el.id == id);
          return el ? EpisodeElement(el) : null;
        })}
      </div>
    </div>
  );
}
