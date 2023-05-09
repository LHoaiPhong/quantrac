var options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#247BA0", "#FF1654"],
    series: [
      {
        name: "Series A",
        data: [21, 12, 36, 38, 40, 50, 48, 46]
      }
    ],
    stroke: {
      width: [2, 2],
      curve: 'smooth',
    },
    markers: {
        size: 4,
    },
    plotOptions: {
      bar: {
        columnWidth: "20%"
      }
    },

    xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        axisBorder: {
            show: true,
            color: "#247BA0"
          },
        labels:{
            style: {
                colors: "#247BA0",
                fontSize: '14px'
            }
        }
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#247BA0",
        },
        labels: {
          style: {
            colors: "#247BA0",
            fontSize: '14px'
          }
        },
        title: {
          text: "Nhiệt độ (℃)",
          style: {
            color: "#247BA0",
            fontWeight: 600,
            fontSize: '20px'
          }
        }
      }
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
      }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    },
    annotations: {
        yaxis: [
          {
            y: 25,y2:50,
            borderColor: 'red'
          }
        ]
      }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
