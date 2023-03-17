import { prisma } from "server/db";
import { EpisodesList } from "../page";

export default async function Page({ params }: { params: params }) {
  console.log(decodeURIComponent(params.character));

  const episodes = await prisma.episode.findMany({
    where: {
      characterName: { contains: decodeURIComponent(params.character) },
    },
  });
  return (
    <>
      {episodes.length > 0 ? (
        <EpisodesList episodes={episodes} />
      ) : (
        <h1>Not Found</h1>
      )}
    </>
  );
}

export function generateMetadata({ params }: { params: params }) {
  return { title: decodeURIComponent(params.character) };
}

type params = { character: string };
