Plotly.d3.csv('seaLevel.csv', function(allRows){

    var xValues = [];
    var yValues = [];

    for(var i=0; i<allRows.length; i++) {
      row =allRows[i];
    //  console.log(row);
      xValues.push( row['Year'] );
      yValues.push( row['CSIRO Adjusted Sea Level']);
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
      title: 'Sea Level',
      yaxis: {title: 'CSIRO Adjusted Sea Level'}
    };

    Plotly.newPlot('seaLevel', data, layout);
});
