let rockButtonEl = document.getElementById("rockButton");
let paperButtonEl = document.getElementById("paperButton");
let scissorButtonEl = document.getElementById("scissorButton");
let goButtonEl = document.getElementById("goButton");
let resetButtonEl = document.getElementById("resetButton");
let resultImgContainerEl = document.getElementById("resultImgContainer");
let resultEl = document.getElementById("result");
let rspMainContainerEl = document.getElementById("rspMainContainer");
let buttonContainerEl = document.getElementById("buttonContainer");
let rockImgEl = document.getElementById("rockImg");
let paperImgEl = document.getElementById("paperImg");
let scissorImgEl = document.getElementById("scissorImg");
let inputValue = -1;

function onChooseRock() {
    paperImgEl.classList.add("d-none");
    scissorImgEl.classList.add("d-none");
    rockImgEl.classList.remove("d-none");
    goButtonEl.classList.remove('d-none');
    resultEl.textContent = "";
    inputValue = 0;

};

function onChoosePaper() {
    rockImgEl.classList.add("d-none");
    scissorImgEl.classList.add("d-none");
    paperImgEl.classList.remove("d-none");
    goButtonEl.classList.remove('d-none');
    resultEl.textContent = "";
    inputValue = 1;
};

function onChooseScissor() {
    rockImgEl.classList.add("d-none");
    paperImgEl.classList.add("d-none");
    scissorImgEl.classList.remove("d-none");
    goButtonEl.classList.remove('d-none');
    resultEl.textContent = "";
    inputValue = 2;
};


resultEl.style.color = "white";

function onGo() {
    let compInput = Math.floor(Math.random() * 3);
    if (inputValue === -1) {
        resultEl.textContent = "Please Choose Anyone !!!";
        resultEl.style.color = "pink";
    } else {
        if (inputValue === compInput) {
            resultEl.textContent = "Match Draw !!!";
            resultEl.style.color = "#FEE715FF";
            inputValue = -1;
        } else if ((inputValue === 0 && compInput === 2) || (inputValue === 1 && compInput === 0) || (inputValue === 2 && compInput === 1)) {
            resultEl.textContent = " You Are The Winner !!!";
            resultEl.style.color = "lightgreen";
            inputValue = -1;
        } else {
            resultEl.textContent = "Computer Wins !!!";
            resultEl.style.color = "maroon";
            inputValue = -1;
        }
        goButtonEl.classList.add('d-none');
    }

};

function onReset() {
    rockImgEl.classList.add("d-none");
    paperImgEl.classList.add("d-none");
    scissorImgEl.classList.add("d-none");
    goButtonEl.classList.remove('d-none');
    resultEl.textContent = "";
};