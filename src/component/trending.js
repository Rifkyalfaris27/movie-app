import axios from "axios";
import renderMovie from './renderMovie.js'

const movieOfTheWeek = () => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjVmM2ViZDQ5M2FmYWYxOGYzNWQ1MTA4OWNiMGUyNSIsInN1YiI6IjY1ODU3MjA3YmQ1ODhiNDUzY2RhNWQyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QJjWkSyf8YwTpMgromt9gwifR_BH6cyFZV7HNW1b8IM'
      }
    };
    
    axios
      .request(options)
      .then(function (response) {
        const results = response.data.results
        renderMovie(results)
        console.log(results);
      })
      .catch(function (error) {
        console.error(error);
      });
}


export default movieOfTheWeek;
