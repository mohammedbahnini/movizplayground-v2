import { useContext } from "react";
import { stateContext } from "../../App";
import Loader from "./Loader";
import cx from 'classnames';
import MovieItem from "./MovieItem";
import Pagination from "./Pagination";

function MoviesList() {
  const { state } = useContext(stateContext);
  const { movies, loading   } = state;


  return (
    <>
      <div className={cx('movies', { fill: movies.length > 0 })} >
        {loading ? <Loader /> : <>{movies.map((movie, index) => <MovieItem movie={movie} index={index} key={index} />)}</>}

      </div>

      <Pagination />
    </>
  )
}

export default MoviesList;