import { useQuery } from "@tanstack/react-query";
import agent from "../Sevices/Agent";

const fetchAllGames = async () => {
    const response = await agent.home.getAllGames();
    return response.data.results;
  };  


  export const useAllGames = () => {
    const {
      isLoading,
      error,
      data: games ,
    } = useQuery({
      queryKey: ["games"],
      queryFn: fetchAllGames ,
    });
    return { isLoading, error, games  };
  }; 