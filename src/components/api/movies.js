import axios from "axios";


export const searchMovies = async (movieName , page )=>{

    // const api = process.env.REACT_APP_API_LINK;
    // const apiSearch = process.env.REACT_APP_API_LINK_SEARCH;

    return new Promise( (resolve , reject )=>{

        const api = movieName === '' ? 
                `https://api.themoviedb.org/3/discover/movie?api_key=6f321c0ad255845c8fe32cccd1d01f5f&page=${page}` : 
                `https://api.themoviedb.org/3/search/movie?api_key=6f321c0ad255845c8fe32cccd1d01f5f&page=${page}&include_adult=false&query=${movieName}`;

        setTimeout(async () => {

            axios.get(api)
                .then( response =>{
                    console.log( response.data);
                    resolve({
                        movies : response.data.results , 
                        error : null ,
                        page: response.data.page , 
                        pagination : response.data.total_pages >= 10 ? 10 : response.data.total_pages 
                    });
                })
                .catch( error =>{
                    reject({
                        movies : null , 
                        error : 'Ooops , an error has occured !'
                    })
                });

          }, 500);

    });

   

   
  
}