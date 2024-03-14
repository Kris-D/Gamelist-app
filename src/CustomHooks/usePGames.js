import { useQuery } from "@tanstack/react-query";
import agent from "../Sevices/Agent";

const fetchPGames = async (id) => {
    const response = await agent.home.getPGames(id);
    return response.data.results;
  };  


  export const usePGames = (id = {}) => {
    const {
      isLoading,
      error,
      data: pgames ,
    } = useQuery({
      queryKey: ["pgames ", id],
      queryFn: () => fetchPGames(id) ,
    });
    return { isLoading, error, pgames  };
  }; 