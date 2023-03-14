import { prisma } from "server/db";
import { EpisodeElement } from "../page";
export default async function Body() {
  const episodes = await prisma.episode.findMany({ orderBy: { id: "asc" } });
  return (
    <div className="mx-auto flex  w-[min(95%,80rem)] flex-wrap justify-center gap-6 text-center">
      {episodes.map((el) => EpisodeElement(el))}
    </div>
  );
}
