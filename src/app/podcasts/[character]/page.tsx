import { prisma } from "server/db";
import { EpisodesList } from "../page";
import PopularEpisodes from "../popular/page";

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

      <h2 className="mb-7 mt-14 font-serif text-3xl font-bold text-gray-900">
        Popular Episodes
      </h2>

      {/* @ts-expect-error Server Component */}
      <PopularEpisodes />
    </>
  );
}

export function generateMetadata({ params }: { params: params }) {
  return { title: decodeURIComponent(params.character) };
}

type params = { character: string };
