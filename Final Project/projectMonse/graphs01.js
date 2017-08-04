Plotly.d3.csv('projectMonse/landIce.csv', function(allRows){

    var xValues = [];
    var yValues = [];

    for(var i=0; i<allRows.length; i++) {
      row =allRows[i];
      xValues.push( row['Geographic Area'] );
      yValues.push( row['Number of glacier outlines']);
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
          width: 2
        }
      }
    };

    var data = [trace1];

    var layout = {
      title: 'Land Ice',
      yaxis: {title: "Geographic Area"},
   margin: {                           // update the left, bottom, right, top margin
        l: 40, b: 150, r: 70, t: 40
      }
    };

    Plotly.newPlot('landIce', data, layout);
});
