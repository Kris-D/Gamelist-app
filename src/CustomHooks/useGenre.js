
import { useQuery } from "@tanstack/react-query";
import agent from "../Sevices/Agent";

const fetchGenreList = async () => {
    const response = await agent.home.getGenreList();
    return response.data.results;
  };


  export const useGenreList = () => {
    const {
      isLoading,
      error,
      data: genreList,
    } = useQuery({
      queryKey: ["genreList"],
      queryFn: fetchGenreList ,
    });
    return { isLoading, error, genreList };
  }; 