Plotly.d3.csv('projectMonse/piomasSumdata.txt', function(allRows){

    var xValues = [];
    var yValues = [];

    for(var i=0; i<allRows.length; i++) {
      row =allRows[i];
      xValues.push( row['Year'] );
      yValues.push( row['year-mean']);
      }
    console.log(xValues);
    var trace1 = {
      x: xValues,
      y: yValues,
      type: 'bar',
      text: yValues,
      textposition: 'auto',
      hoverinfo: 'none',
      marker: {
        color: 'rgb(158,202,225)',
        opacity: 0.6,
        line: {
          color: 'rbg(8,48,107)',
          width: 1.5
        }
      }
    };

    var data = [trace1];

    var layout = {
      title: 'Arctic Ice',
      yaxis: {title: "Amount of Arctic Ice"}
    };

    Plotly.newPlot('articIce', data, layout);
});
