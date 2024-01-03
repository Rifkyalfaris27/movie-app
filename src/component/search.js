import renderMovie from "./renderMovie.js";
const axios = require('axios');

const search = () => {
    const inputSearch = document.querySelector('#inputSearch');
    const btnSearch = document.querySelector('#btnSearch');
    const container = document.querySelector('#container');
    const trending = document.querySelector('.trending');
    const containerMessage = document.querySelector('#responseMessage');
    
    const message = document.createElement('p');
    message.classList.add("mes");

  // Function to clear the container
  const clearMainPage = () => {
      container.innerHTML = ''; // Clear previous search results
      trending.innerHTML = '';
      containerMessage.innerHTML = '';
  };
  
  const showResponMessage = (value) => {
      message.innerText = value //+ " Not Found!"
      containerMessage.appendChild(message);
  };
  
  btnSearch.addEventListener('click', async (e) => {
      e.preventDefault();
      let query = inputSearch.value;

      if(!query.trim()){
        clearMainPage();
        showResponMessage("Please Enter A Valid Tittle");
        return
      }

        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjVmM2ViZDQ5M2FmYWYxOGYzNWQ1MTA4OWNiMGUyNSIsInN1YiI6IjY1ODU3MjA3YmQ1ODhiNDUzY2RhNWQyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QJjWkSyf8YwTpMgromt9gwifR_BH6cyFZV7HNW1b8IM'
            }
        };

        axios
        .request(options)
        .then(function (response) {
            const results = response.data.results
                  if(results.length !== 0) {
                      clearMainPage();
                      showResponMessage("Results Of " + `" ${query} "`)
                      renderMovie(results)
                  } else {
                    clearMainPage()
                    showResponMessage(`" ${query} "` + " Not Found!")
                  }
            console.log(response.data.results);
        })
        .catch(err => {
            clearMainPage()
            showResponMessage(err)
            console.log('error: ', err)
        });

    })
}

export default search
