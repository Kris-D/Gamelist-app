import axios from "axios";
const key = 'd16920fe15034f8788a40634d357d9c6'
const api= axios.create({
    baseURL:'https://api.rawg.io/api'
})

const home = {
    getGenreList: () => api.get("/genres?key="+key),
    getAllGames: () => api.get("/games?key="+key),
    getPGames: (id) => api.get("/games?key="+key+"&genres="+id),
  };
  
  const agent = {
    home,
  };

  export default agent;