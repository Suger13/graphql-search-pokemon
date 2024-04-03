import { Suspense } from "react";
import SearchPokemon from "./_components/SearchPokemon";

export default function Home() {

  return (
    <div>
      <div className="flex flex-col items-center mt-5 w-full gap-10">
        <Suspense>
          <SearchPokemon />
        </Suspense>
      </div>
    </div>
  );
}
