import { prisma } from "server/db";
import Image from "next/image";
import Link from "next/link";
export default async function Body() {
  const episodes = await prisma.eposide.findMany({ orderBy: { id: "asc" } });
  return (
    <div className="mt-20 text-center">
      <h2 className="mb-10 text-4xl text-gray-900">Latest episodes</h2>
      <div className="mx-auto flex  w-[min(95%,80rem)] flex-wrap justify-center gap-6 text-center">
        {episodes.map((el) => (
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
            <p className=" mt-4 text-sm text-gray-500"> {el.characterName}</p>
            <p className="  text-lg text-gray-700">{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
