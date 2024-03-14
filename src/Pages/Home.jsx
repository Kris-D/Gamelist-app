import { useState } from "react";
import { Banner } from "../Components/Banner";
import GenreList from "../Components/GenreList";
import PGames from "../Components/PGames";
import TrendingGames from "../Components/TrendingGames";
import { useAllGames } from "../CustomHooks/useAllGames";
import { usePGames } from "../CustomHooks/usePGames";

export const Home = () => {
  const [genresId, setGenresId] = useState(4);
  const { games } = useAllGames();
  const id = genresId
  const { pgames } = usePGames(id);
  // console.log("games:", games);
  // console.log("pgames:", pgames);
  console.log("genresId:", genresId);

  return (
    <div className=" grid grid-cols-4 px-5">
      <div className=" col-span-1 hidden h-full md:block ">
        <GenreList setGenresId={setGenresId} />
      </div>
      <div className="col-span-4 md:col-span-3  dark:text-white">
        {games && games.length > 0 && pgames && pgames.length > 0 && (
          <div className="">
            <Banner gameBanner={games[0]} />
            <TrendingGames gameList={games}/>
            <PGames  gameList={pgames}/>
          </div>
        )}
      </div>
    </div>
  );
};
