import { prisma } from "server/db";
import { SecondaryHeader } from "../layout";
import { EpisodesList } from "../page";

export default async function Page({ params }: { params: params }) {
  const episodes = await prisma.episode.findMany({
    where: {
      characterName: { contains: decodeURIComponent(params.character) },
    },
  });
  return (
    <>
      {episodes ? (
        <EpisodesList episodes={episodes} />
      ) : (
        <SecondaryHeader className="my-32 font-sans">Not found</SecondaryHeader>
      )}
    </>
  );
}

export async function generateStaticParams(): Promise<params[]> {
  return (
    await prisma.episode.findMany({ select: { characterName: true } })
  ).map((el) => ({
    character: decodeURIComponent(el.characterName),
  }));
}

export function generateMetadata({ params }: { params: params }) {
  return { title: decodeURIComponent(params.character) };
}

type params = { character: string };
