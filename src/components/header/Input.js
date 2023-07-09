import { useContext } from "react";
import { stateContext } from "../../App";
import { searchMovies } from "../api/movies";

const Input = () => {
    const { state, dispatch } = useContext(stateContext);
    const { search } = state ;


    const submitForm = async (e)=>{
        e.preventDefault();

        dispatch({ loading : true , movies : [] , search , error : null   });
        const result = await searchMovies(search , 1 );
        const { movies , error , page:updatedPage , pagination } = result ;
        dispatch({ loading : false , movies , error , page : updatedPage , pagination });
    };
    
    return (
        <form onSubmit={e=> submitForm(e) } >
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={e=>dispatch({search : e.target.value})}
            />
        </form>

    )
}

export default Input;