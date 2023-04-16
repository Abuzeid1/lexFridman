import { type Episode } from "@prisma/client";
import { prisma } from "server/db";
import { EpisodesList } from "../page";

export default async function PopularEpisodes() {
  const popularEpisodes = await prisma.episode.findMany({
    where: { id: { in: popularEpisodesIds } },
  });
  return <EpisodesList episodes={sortPopularEpisodes(popularEpisodes)} />;
}

const popularEpisodesIds = [
  313, 300, 252, 122, 310, 336, 185, 345, 276, 293, 332, 136, 188, 154, 267, 45,
  355, 301, 208, 351, 286, 127, 272, 137, 194,
].map((el) => 365 - el);

const sortPopularEpisodes = (episodes: Episode[]) => {
  const arr: Episode[] = [];
  for (const id of popularEpisodesIds) {
    const episode = episodes.find((el) => el.id == id);
    if (episode) {
      arr.push(episode);
    }
  }
  return arr;
};
