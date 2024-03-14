import PropTypes from "prop-types";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { ImFire } from "react-icons/im";
const PGames = ({ gameList }) => {
  PGames.propTypes = {
    gameList: PropTypes.any.isRequired,
  };
  useEffect(() => {
    console.log("gameList:", gameList);
  }, [gameList]);
  return (
    <div className="">
        <h2 className="font-bold text-[30px] dark:text-white mt-5">Popular Games</h2>
    <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
      {gameList.map((game) => (
        <div key={game.id} className="bg-[#76a8f75e] p-3 rounded-lg pb-10 h-full hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer">
          <img
            src={game.background_image}
            alt=""
            className="w-full h-[80%] rounded-xl object-cover"
          />
          <h2 className=" text-[20px] dark:text-white font-bold">
            {game.name} <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">{game.metacritic} </span>{" "}
          </h2>
          <div className="flex gap-3">
            <div className="flex">
              <FaStar className="mt-[2px] text-yellow-300" />
              <h2 className="text-gray-500 dark:text-gray-200"> {game.rating} </h2>
            </div>
            <div className="flex">
              <AiFillMessage className="mt-1 text-white" />
              <h2 className="text-gray-500 dark:text-gray-200"> {game.reviews_count} </h2>
            </div>
            <div className="flex">
              <ImFire className="mt-1 text-orange-400 "/>
              <h2 className="text-gray-500 dark:text-gray-300"> {game.suggestions_count} </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default PGames;
