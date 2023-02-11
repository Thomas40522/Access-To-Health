google.charts.load('current', {
  'packages':['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

async function drawRegionsMap() {
  // var data = google.visualization.arrayToDataTable([
  //   ['Country', 'Popularity'],
  //   ['Germany', 200],
  //   ['United States', 300],
  //   ['Brazil', 400],
  //   ['Canada', 500],
  //   ['France', 600],
  //   ['RU', 700]
  // ]);

  var data = google.visualization.arrayToDataTable(await getData());

  var options = {};

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}

async function getData() {
  var data = [['Country', 'Winning Chance']];
  await $.ajax({
    type: "GET",
    url: "http://localhost:8000/data.csv",
    dataType: "text",
    success: function(response) {
      response.split("\n").forEach((item) => {
        data.push([item.split(",")[0], parseInt(item.split(",")[1])]);
      })
    }
  })

  console.log(data)
  return data;
}