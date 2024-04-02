import SearchPokemon from "./_components/SearchPokemon";

export default function Home() {

  return (
    <div>
      <div className="flex flex-col items-center mt-20 w-full gap-10">
        <SearchPokemon />
      </div>
    </div>
  );
}
