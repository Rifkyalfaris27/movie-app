import 'regenerator-runtime'
import { baseUrlPicture } from "../url/url.js";
import 'jquery'

const renderMovie = (a) => {
    a.forEach((element) => {
        if (element.poster_path) {
            const urlPicture = baseUrlPicture + element.poster_path;

            const realeseDate = element.release_date;
            const yearRealse = realeseDate.substring(0, 4);

            const ratingRounded = Math.round(element.vote_average * 10) / 10;

            const container = document.querySelector('#container');
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
            movieItem.innerHTML = `
                <img src="${urlPicture}">
                <p>${element.title} (${yearRealse})</p>
                <div class="rating-container">
                    <p class="rating">${ratingRounded}</p>
                </div>
            `;

            // Add click event listener to each movie item
            movieItem.addEventListener('click', () => {
                  document.querySelectorAll('.movie-item').forEach((movieItem) => {
                    const existingPreview = movieItem.querySelector('.previewContainer');
                    if (existingPreview) {
                        existingPreview.remove();
                    }
                });
                // Check if previewContainer already exists
                const previewContainer = movieItem.querySelector('.previewContainer');
                if (!previewContainer) {
                    // If not, create and append previewContainer
                    const newPreviewContainer = document.createElement('div');
                    newPreviewContainer.classList.add('previewContainer')
                    newPreviewContainer.innerHTML = `
                            <button id="closeBtn">x</button>
                            <img src="${urlPicture}">
                            <div class="detail">
                                <p class="titles">${element.title}</p>
                                <p class="description">${element.overview}</p>
                                <p class="ratings">Ratings : <i class="fa-solid fa-star"></i>${ratingRounded}</p>
                                <p class="release">Release : ${yearRealse}</p>
                            </div>
                    `;
                    movieItem.appendChild(newPreviewContainer);
                    
                    const btnX = document.getElementById('closeBtn')
                    
                    btnX.addEventListener('click', () => {
                        console.log(newPreviewContainer)
                        console.log('x ditekan')
                        newPreviewContainer.style.display = 'none'
                    })
                }
            });

            // Append the movie item to the container
            container.appendChild(movieItem);
        }
    });
};

export default renderMovie;



    
