let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");



let countDown = 10;

let intervalId = setInterval(function() {
    countDown = countDown - 1;
    timerEl.textContent = countDown;
    if (countDown === 0) {
        timerEl.textContent = "BOOM !!"
        clearInterval(intervalId);
    }
}, 1000);


defuserEl.addEventListener("keydown", function(event) {
    let bombDefuserText = defuserEl.value;
    if (event.key === "Enter" && bombDefuserText === "defuse" && countDown !== 0) {
        timerEl.textContent = "You did It !!"
        clearInterval(intervalId);
    }

});