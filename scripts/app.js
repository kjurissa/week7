const container = document.querySelector('.container');
const movieTitle =document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieYear = document.querySelector('.userInputYear');
const movieYearToDisplay = document.querySelector('.movieYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');

if(titleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let userinputYear = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput)
    localStorage.setItem('year', userinputYear);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieYearToDisplay.textContent = userinputYear;
    container.style.backgroundImage = `linear-gradient(rgba(34, 34, 77, 0.421),rgba(76, 61, 61, 0.481)),
    url('${posterUrlInput}')`; 
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieYear.value = '';
});