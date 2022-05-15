let searchInputEl = document.getElementById("searchInput");
let selectDisplayCountEl = document.getElementById("selectDisplayCount");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendResults(result) {

    let bookContainerEl = document.createElement("div");
    bookContainerEl.classList.add("col-6", "mt-5", "d-flex", "mr-auto", "ml-auto", "flex-column");
    searchResultsEl.appendChild(bookContainerEl);


    let bookImgEl = document.createElement("img");
    bookImgEl.src = result.imageLink;
    bookImgEl.classList.add("book-img", "mt-2", "mb-auto");
    bookContainerEl.appendChild(bookImgEl);

    let bookAuthorEl = document.createElement("p");
    bookAuthorEl.textContent = result.author;
    bookAuthorEl.classList.add("book-author");
    bookContainerEl.appendChild(bookAuthorEl);
}




function displayResults(search_results) {
    let booksHeadingEl = document.createElement("h1");
    booksHeadingEl.classList.add("books-heading", "col-12");
    searchResultsEl.appendChild(booksHeadingEl);


    if (search_results.length !== 0) {
        booksHeadingEl.textContent = "Popular Books";
        for (let result of search_results) {
            createAndAppendResults(result);
        }
    } else {
        booksHeadingEl.textContent = "No results found";
    }
}


function getBookList(event) {
    if (event.key === "Enter") {
        searchResultsEl.textContent = "";
        spinnerEl.classList.remove("d-none");
        let searchInput = searchInputEl.value;
        let noOfBooks = selectDisplayCountEl.value
        let url = "https://apis.ccbp.in/book-store?title=" + searchInputEl.value + "&maxResults=" + noOfBooks;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                //console.log(jsonData);
                let {
                    search_results
                } = jsonData;
                spinnerEl.classList.add("d-none");
                displayResults(search_results);


            });
    }
}


searchInputEl.addEventListener("keydown", getBookList);