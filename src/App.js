import { createContext, useEffect, useReducer } from "react";
import Header from "./components/header/Header";
import { initialeState, reducer } from "./store/reducer";
import MoviesList from "./components/movies/MoviesList";
import { searchMovies } from "./components/api/movies";



export const stateContext = createContext(initialeState);
function App() {

  const [state, dispatch] = useReducer(reducer, initialeState);
  const { search , page }= state ;
  useEffect(()=>{
    (async ()=>{
      
      const {movies , error   } = await searchMovies(search , page  );

      dispatch({
        loading : false , 
        movies , 
        error 
      })
    })();
  } , []);
  return (
    <stateContext.Provider value={{ state, dispatch }} >
      <Header />
      <div className="container">
        <MoviesList />
      </div>
    </stateContext.Provider>

  );
}

export default App;
