document.getElementById("chance").addEventListener("click", () => {
  google.charts.setOnLoadCallback(drawRegionsMap("http://localhost:8000/pScore.csv", ['Country', 'Probability To Score']));
});

document.getElementById("player").addEventListener("click", () => {
  google.charts.setOnLoadCallback(drawRegionsMap("http://localhost:8000/pWin.csv",  ['Country', 'Probability To Win']));
});