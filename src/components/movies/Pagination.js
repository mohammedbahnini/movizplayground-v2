import classNames from "classnames";
import { useContext } from "react";
import { stateContext } from "../../App";
import { searchMovies } from "../api/movies";

function Pagination(props) {
    const { state , dispatch }= useContext(stateContext);
    const { pagination , page:currentPage  , search  } = state ;
    console.log(currentPage);

    const nextMovie = async (e , index)=>{
        
        dispatch({ loading : true , movies : [] , error : null });
        const { movies , error , page:updatedPage , pagination  } = await searchMovies(search , index  );
        dispatch({ loading : false , movies , error , page : updatedPage , pagination  });
    };
    
    return (

        <div className="pagination">
            <ul>
                {
                    [...Array(pagination)].map( (item, index)=>{

                        return (
                            <li 
                            key={index} 
                            className={classNames({ active : index + 1 === currentPage })}
                            onClick={e=>nextMovie(e , index + 1 )}
                            >{index + 1}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Pagination;