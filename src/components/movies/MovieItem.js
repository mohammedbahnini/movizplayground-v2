import { useEffect, useRef } from "react";
import cx from 'classnames';


function MovieItem (props){
    const { movie , index }= props;
    const movieRef = useRef();

    useEffect ( ()=>{

        const obersever = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              }
            });
          });
         
          obersever.observe(movieRef.current);

    } , []);
    
    return (
        <div
    className="movie"
    style={{ transitionDelay : `${index * 0.05}s`}}
    ref={movieRef}
    >

        <div className="movie__poster">
        <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
        />
        </div>
        <div className="movie__info">
        <p className="title">{ movie.title }</p>
        <span className={ cx('rating',{ 
            green : movie.vote_average >= 8 , 
            orange : movie.vote_average <8 && movie.vote_average >= 5 , 
            red : movie.vote_average < 5
        }) } >
            { movie.vote_average.toFixed(1) }
            </span>
        </div>

        <div className="movie__overview">
        <h3 className="movie__overview-title">Overview</h3>
        <p>{ movie.overview }</p>
        </div>
    </div>
    )
}

export default MovieItem ;