const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";


// const movieEl = document.querySelector(".movie")

const movieData = async () => {
    const res = await fetch(APIURL);
    const resData = await res.json();
    // console.log(resData.results);
    // return resData;

    resData.results.forEach((data) => {
        console.log(data);

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
        <img src="${IMGPATH + data.poster_path}"/>
            <div class="movie_info">
                <h3>${data.title}</h3>
                <span>${data.vote_average}</span>
            </div>
        `;

        document.body.append(movieEl);
    });
};

movieData();
