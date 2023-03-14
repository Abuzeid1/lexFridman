import { prisma } from "server/db";
import { EpisodesList } from "../page";

export default async function Body() {
  const episodes = await prisma.episode.findMany({ orderBy: { id: "asc" } });
  return <EpisodesList episodes={episodes} />;
}
