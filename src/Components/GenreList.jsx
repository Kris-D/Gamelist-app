import PropTypes from "prop-types";

import { useState } from "react";
import { useGenreList } from "../CustomHooks/useGenre";

const GenreList = ({setGenresId}) => {
  // const queryClient = useQueryClient();
  const { genreList } = useGenreList();
  const [activeIndex, setActiveIndex] = useState(0);
  GenreList.propTypes = {
    setGenresId: PropTypes.any.isRequired,
  };

  // if (!genreList) {
  //   return <div>Loading...</div>; // or any other fallback UI
  // }

  return (
    <div>
      <h2 className=" text-[30px] font-bold dark:text-white">Genres</h2>
      {genreList && genreList.length > 0 && genreList.map((genre, index) => (
        <div
          key={genre.id}
          onClick={() => {setActiveIndex(index); setGenresId(genre.id)}}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg hover:S group ${
            activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null
          }`}
        >
          <img
            src={genre.image_background}
            alt=""
            className= {`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
              activeIndex == index ? "scale-105" : null
            }`}
          />
          <h3 className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${
              activeIndex == index ? "font-bold" : null
            }`}>
            {genre.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
