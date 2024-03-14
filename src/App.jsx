import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Home } from "./Pages/Home";
import { ThemeContext } from "./Context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Setup caching with react-query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // set the time interval that query will be refetched (1mins)
      // staleTime: 60 * 1000,
      // set the time interval that query will be refetched (0min)
      staleTime: 0,
    },
  },
});


function App() {
  const [theme, setTheme] = useState("light")
  useEffect(() => {
 setTheme( localStorage.getItem('theme') ? localStorage.getItem('theme'): "dark")  
  }, [])
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{theme, setTheme}}>
    <div className= {`${theme} ${theme == "dark" ? 'bg-[#121212]': null} min-h-[100vh]`}>
      <Header />
      <Home />
    </div>
    </ThemeContext.Provider>
    
    </QueryClientProvider>
    
  );
}

export default App;
