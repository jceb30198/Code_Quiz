var scoreItem = localStorage.getItem("highscore");
var parse = JSON.parse(scoreItem);
var ulEl = document.querySelector(".score-table").lastElementChild;
var scoreEl = document.createElement("li");
       
for(var i = 0; i < parse.length; i++) {
scoreEl.textContent = parse[i].name + ": " + parse[i].score;
ulEl.append(scoreEl);
}