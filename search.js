function searchMovies() {
  let input = document.getElementById("searchBar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("sm");
  let counter = 0;
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
      counter++;
      // document.querySelector(".searchStatus").style.display = "block";
    } else {
      x[i].style.display = "list-item";
      // document.querySelector(".searchStatus").style.display = "none";
    }
  }
  if (counter >= x.length) {
    document.querySelector(".searchStatus").style.display = "block";
  } else {
    document.querySelector(".searchStatus").style.display = "none";
  }
  if (input.length > 0) {
    document.getElementById("Trending").style.display = "none";
    document.getElementById("Discover").style.display = "none";
    document.getElementById("disp").style.display = "none";
    document.querySelectorAll(".movieClassCont").forEach((i) => {
      i.style.display = "none";
    });
    document.querySelector(".phonesideBar").style.display = "none";
    document.querySelector(".backCont").style.display = "block";
    document.querySelector("footer").style.display = "none";
  } else {
    document.getElementById("Trending").style.display = "block";
    document.getElementById("Discover").style.display = "block";
    document.getElementById("disp").style.display = "block";
    document.querySelector(".phonesideBar").style.display = "";
    document.querySelectorAll(".movieClassCont").forEach((i) => {
      i.style.display = "flex";
    });
    document.querySelector(".backCont").style.display = "none";
    document.querySelector("footer").style.display = "grid";
  }
  if (input.length > 0 && window.innerWidth <= 380) {
    document.querySelectorAll("ol").forEach((i) => {
      i.style.display = "grid";
      i.style.gridTemplateColumns = "1fr 1fr";
      console.log(window.innerWidth);
    });
  } else {
    document.querySelectorAll("ol").forEach((i) => {
      i.style.display = "";
    });
  }
}

//recents
const recentMovies = document.getElementById("recents");

const fetchRecents = async () => {
  const response = await fetch(
    "https://mocki.io/v1/481b5944-b687-4b35-91dc-06fbde33674e"
  );
  const movies = response.json();
  return movies;
};

const createRecents = async () => {
  const movies = await fetchRecents();
  if (movies?.length) {
    movies?.forEach((movie) => {
      const li = document.createElement("li");
      li.classList.add("sm");
      li.innerHTML = `
                <div class="movies">
                    <img src=${movie?.movieImg}>
                    <div class="movieInfo">
                        <div class="sourceCont">
                            <div class="sourceText">
                                <p>Source:</p>
                            </div>
                            <div class="source">
                                <span>${movie?.movieSourceText}</span>
                                <img src="Icons/images (1).png">
                            </div>
                        </div>
                        <div class="movieTitleCont">
                            <h4>${movie?.movieTitle}</h4>
                        </div>
                        <div class="movieDesc">
                            <p>${movie?.description}</p>
                        </div>
                        <div class="viewLinkCont">
                            <a href=${movie?.movieSource}><button class="viewBtn">View</button></a>
                        </div>
                    </div>
                </div>
`;
      recentMovies.appendChild(li);
    });
  }
};
createRecents();

//trending
const trendingMovies = document.getElementById("trending");

const fetchTrending = async () => {
  const response = await fetch(
    "https://mocki.io/v1/d1fb375c-3e0d-4097-8668-6dc647825bf0"
  );
  const movies = response.json();
  return movies;
};

const createTrending = async () => {
  const movies = await fetchTrending();
  if (movies?.length) {
    movies?.forEach((movie) => {
      const li = document.createElement("li");
      li.classList.add("sm");
      li.innerHTML = `
                <div class="movies">
                    <img src=${movie?.movieImg}>
                    <div class="movieInfo">
                        <div class="sourceCont">
                            <div class="sourceText">
                                <p>Source:</p>
                            </div>
                            <div class="source">
                                <span>${movie?.movieSourceText}</span>
                                <img src="Icons/images (1).png">
                            </div>
                        </div>
                        <div class="movieTitleCont">
                            <h4>${movie?.movieTitle}</h4>
                        </div>
                        <div class="movieDesc">
                            <p>${movie?.description}</p>
                        </div>
                        <div class="viewLinkCont">
                            <a href=${movie?.movieSource}><button class="viewBtn">View</button></a>
                        </div>
                    </div>
                </div>
`;
      trendingMovies.appendChild(li);
    });
  }
};
createTrending();

//discovered
const discoveredMovies = document.getElementById("discover");

const fetchDiscovered = async () => {
  const response = await fetch(
    "https://mocki.io/v1/7ee61926-4fd4-439e-bd2f-417a5a843e3a"
  );
  const movies = response.json();
  return movies;
};

const createDiscovered = async () => {
  const movies = await fetchDiscovered();
  if (movies?.length) {
    movies?.forEach((movie) => {
      const li = document.createElement("li");
      li.classList.add("sm");
      li.innerHTML = `
                <div class="movies">
                    <img src=${movie?.movieImg}>
                    <div class="movieInfo">
                        <div class="sourceCont">
                            <div class="sourceText">
                                <p>Source:</p>
                            </div>
                            <div class="source">
                                <span>${movie?.movieSourceText}</span>
                                <img src="Icons/images (1).png">
                            </div>
                        </div>
                        <div class="movieTitleCont">
                            <h4>${movie?.movieTitle}</h4>
                        </div>
                        <div class="movieDesc">
                            <p>${movie?.description}</p>
                        </div>
                        <div class="viewLinkCont">
                            <a href=${movie?.movieSource}><button class="viewBtn">View</button></a>
                        </div>
                    </div>
                </div>
`;
      discoveredMovies.appendChild(li);
    });
  }
};
createDiscovered();
