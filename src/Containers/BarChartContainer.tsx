import ReactApexChart from 'react-apexcharts';
import { BarChartContainerProps } from "./types";

function BarChartContainer({data}: BarChartContainerProps) {
  const state = {
    series: [
      {
        name: "wood",
        data: data,
      },
    ],
    options: {
      chart: {
        id: "bar",
        height: 350,
        animations: {
          enabled: true,
          dynamicAnimation: {
            speed: 1000,
          },
        },
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },

      theme: {
        palette: "palette1",
      },
      colors: [
        function ({ dataPointIndex}: any) {
            if (dataPointIndex == 0) {
              return "#EB5757";
            }
            if (dataPointIndex == 1) {
              return "#008FFB";
            }
            if (dataPointIndex == 2) {
              return "#5CB681";
            }
            return ''
          }
      ],
      annotations: {
        yaxis: [
          {
            y: 30,
            borderColor: "#999",
            label: {
              show: true,
              text: "Support",
              style: {
                color: "#fff",
                background: "#00E396",
              },
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: "hollow",
      },
      xaxis: {
        categories: ["Макс. цена", "Средняя цена", "Мин. цена"],
      },
      tooltip: {
        y: {
          formatter: undefined,
          title: {
            formatter: (seriesName: any) => "",
          },
        },
      },
    },
    selection: "one_year",
  };
  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="bar"
      height={350}
    />
  );
}

export default BarChartContainer;
