import PropTypes from "prop-types";


const TrendingGames = ({ gameList }) => {
  TrendingGames.propTypes = {
    gameList: PropTypes.any.isRequired,
  };
//   useEffect(() => {
//     console.log("gameList:", gameList);
//   }, [gameList]);

  return (
    <div className=" mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>
      <div className="  md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 ">
        {gameList.map(
          (game, index) =>
            index < 4 && (
              <div
                key={game.id}
                className="bg-[#76a8f75e] rounded-lg  group hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
              >
                <img
                  src={game.background_image}
                  alt=""
                  className="h-[270px] object-cover rounded-t-lg "
                />
                <h2 className="dark:text-white text-[20px] font-bold p-2">
                  {game.name}{" "}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TrendingGames;
