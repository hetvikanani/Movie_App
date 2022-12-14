const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const main = document.querySelector("main");
const form = document.getElementById('form');
const searchIn = document.getElementById('search');

const showMovies = (resData) => {

    main.innerHTML = ''

    resData.results.forEach((data) => {

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
        <img src="${IMGPATH + data.poster_path}"/>
            <div class="movie_info">
                <h3>${data.title}</h3>
                <span class=${rating(data.vote_average)}>${data.vote_average}</span>
            </div>
            <div class="overview">
            <h3>Overview:</h3>
            ${data.overview}
            </div>
        `;

        main.append(movieEl);
    });
}

const movieData = async (URL) => {
    const res = await fetch(URL);
    const resData = await res.json();
    showMovies(resData)
};


const rating = (vote) => {
    if (vote >= 8) {
        return "blue"
    } else if (vote >= 5) {
        return "red"
    } else {
        return "yellow"
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchVal = searchIn.value;
    if (searchVal) {
        movieData(SEARCHAPI + searchVal);
        searchIn.value = '';
    }
})


movieData(APIURL);

