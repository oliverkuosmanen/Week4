import "./styles.css";

const submitButton = document.getElementById("submit-data");
const inputShow = document.getElementById("input-show");
const showDataDiv = document.getElementById("show-data");

/*document.addEventListener("DOMContentLoaded", () => {*/
async function fetchShows() {
  const url = "https://api.tvmaze.com/search/shows?q=" + inputShow.value;
  const showsPromise = await fetch(url);
  const showsJSON = await showsPromise.json();
  console.log(showsJSON);

  showsJSON.forEach((tvShow) => {
    let div1 = document.createElement("div");
    div1.className = "show-data";
    let image = document.createElement("img");
    if (tvShow.show.image && tvShow.show.image.medium) {
      console.log(tvShow.show.image.medium);
      image.src = tvShow.show.image.medium;
      div1.appendChild(image);
    }

    let div2 = document.createElement("div");
    div2.className = "show-info";
    let showTitle = document.createElement("h1");
    showTitle.innerText = tvShow.show.name;
    let showSummary = document.createElement("div"); //div changes to p cause innerHTML
    showSummary.innerHTML = tvShow.show.summary;
    div2.appendChild(showTitle);
    div2.appendChild(showSummary);

    div1.appendChild(div2);

    showDataDiv.appendChild(div1);
  });
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  fetchShows();
});
//});

//submitButton.addEventListener("click", fetchShows);
//});
