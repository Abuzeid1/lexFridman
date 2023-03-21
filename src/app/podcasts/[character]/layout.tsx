import { SecondaryHeader } from "../layout";
import PopularEpisodes from "../popular/page";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="scroll-mt-56">
      {children}

      <SecondaryHeader className="mb-12  mt-24 font-serif font-bold">
        Popular Episodes
      </SecondaryHeader>

      {/* @ts-expect-error Server Component */}
      <PopularEpisodes />
    </div>
  );
}
