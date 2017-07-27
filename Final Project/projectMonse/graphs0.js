
Plotly.d3.csv('projectMonse/outFile_beijing_weather2.csv', function(rows){
  console.log(window.location.pathname);  
  var trace = {
      type: 'scatter',                    // set the chart type
      mode: 'lines',                      // connect points with lines
      x: rows.map(function(row){          // set the x-data
          var ymd= row['YEARMODA'];
          ymd= ymd.toString();
          var year= ymd.slice(0,4);
          var month= ymd.slice(4,6);
          var day= ymd.slice(6,8);
          date= new Date(year, month, day);
          return (date)
      }),
      y: rows.map(function(row){          // set the y-data
        return row['TEMP'];
      }),
      line: {                             // set the width of the line.
        width: 1
      },
    /*  error_y: {
        array: rows.map(function(row){    // set the height of the error bars
          return row['10 Min Std Dev'];
        }),
        thickness: 0.5,                   // set the thickness of the error bars
        width: 0
      } */
    };

    var layout = {
      yaxis: {title: "TEMP"},       // set the y axis title
      xaxis: {
        showgrid: false,                  // remove the x-axis grid lines
        tickformat: "%B, %Y"              // customize the date format to "month, day"
      },
      margin: {                           // update the left, bottom, right, top margin
        l: 40, b: 10, r: 10, t: 20
      }
    };

    Plotly.plot(document.getElementById('TEMP'), [trace], layout, {showLink: false});
});
