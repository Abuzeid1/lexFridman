import { RecentEpisodes } from "../page";

export default function Body() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <RecentEpisodes />
    </>
  );
}
