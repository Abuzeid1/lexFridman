import { prisma } from "server/db";
import { SecondaryHeader } from "../layout";
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
    <div className="scroll-mt-56">
      {episodes.length > 0 ? (
        <EpisodesList episodes={episodes} />
      ) : (
        <SecondaryHeader className="my-32 font-sans">Not found</SecondaryHeader>
      )}

      <SecondaryHeader className="mb-12  mt-24 font-serif font-bold">
        Popular Episodes
      </SecondaryHeader>

      {/* @ts-expect-error Server Component */}
      <PopularEpisodes />
    </div>
  );
}

export function generateMetadata({ params }: { params: params }) {
  return { title: decodeURIComponent(params.character) };
}

type params = { character: string };
