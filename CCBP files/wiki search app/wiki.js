let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");
let searchButtonEl = document.getElementById("searchButton");

function createAndAppendSearchResult(result) {
    let {
        title,
        link,
        description
    } = result;
    // Div Container---result item
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultsEl.appendChild(resultItemEl);

    // MAking Anchor Element---
    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);

    //Making Title break
    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    // Making url 
    let UrlEl = document.createElement("a");
    UrlEl.classList.add("result-url");
    UrlEl.href = link;
    UrlEl.target = "_blank";
    UrlEl.textContent = link;
    resultItemEl.appendChild(UrlEl);

    //Making line break
    let lineBreakEl = document.createElement("br");
    resultItemEl.appendChild(lineBreakEl);

    // MAking Description Element---
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);


}

function displayResults(search_results) {
    // let result = search_results[0];
    //for multiple result
    spinnerEl.classList.toggle("d-none"); //hides spinner
    for (let result of search_results) {
        createAndAppendSearchResult(result);
    }
}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.toggle("d-none"); //shows spinner
        searchResultsEl.textContent = "";
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}

searchInputEl.addEventListener("keydown", searchWikipedia);
searchButtonEl.addEventListener("click", function() {
    spinnerEl.classList.toggle("d-none"); //shows spinner
    searchResultsEl.textContent = "";
    let searchInput = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let {
                search_results
            } = jsonData;
            displayResults(search_results);
        });
});