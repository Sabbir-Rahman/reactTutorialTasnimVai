import axios from "axios";

const TMDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/",

})
const getMoviesByTerm =(searchTerm,setMovies) =>{
    TMDB.get('/search/movie', {
        params: {
          api_key: "0a7271957691599b4fed5f80f06e029d",
          query: searchTerm,
        },
    }).then((response) => {

        setMovies(response.data.results)
    })
}
export {getMoviesByTerm}