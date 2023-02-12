google.charts.load('current', {
  'packages':['geochart'],
});

// google.charts.setOnLoadCallback(drawRegionsMap("http://localhost:8000/data-chance.csv"));

async function drawRegionsMap(url, header) {

  var data = google.visualization.arrayToDataTable(await getData(url, header));

  var options = {};

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}

async function getData(url, header) {
  console.log('url')
  var data = [header];
  await $.ajax({
    type: "GET",
    url: url,
    dataType: "text",
    success: function(response) {
      response.split("\n").forEach((item) => {
        data.push([item.split(",")[0], parseInt(parseFloat(item.split(",")[1]) * 100)/100.0]);
      })
    }
  })

  console.log(data)
  return data;
}
