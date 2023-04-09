import ReactApexChart from 'react-apexcharts';
import format from "date-fns/format";

import { LineChartContainerProps } from "./types";

function LineChartContainer({wood, plain}: LineChartContainerProps) {

  const state = {
    series: [
      {
        name: "wood",
        data: wood,
        tooltip: {
          x: {
            format: "dd MMM yyyy",
          },
        },
      },
      {
        name: "plain",
        data: plain,
        tooltip: {
          x: {
            format: "dd MMM yyyy",
          },
        },
      },
    ],
    options: {
      title: {
        text: "Средняя цена за 1 единицу товара",
      },
      legend: {
        show: false,
      },
      xaxis: {
        labels: {
          show: true,
          rotate: -45,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false,
          trim: false,
          minHeight: undefined,
          maxHeight: 120,
          style: {
            colors: [],
            fontSize: "12px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 400,
            cssClass: "apexcharts-xaxis-label",
          },
          offsetX: 0,
          offsetY: 0,
          format: undefined,
          formatter: (value: any) => {
            console.log(value);
            if (value && value > 0) {
              return `${format(new Date(value), "yyyy-LL-dd hh:mm")}`;
            }
            return "";
          },
          datetimeUTC: true,
          datetimeFormatter: {
            year: "yyyy",
            month: "MMM 'yy",
            day: "dd MMM",
            hour: "HH:mm",
          },
        },
      },
      chart: {
        id: "wood",
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

      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: "hollow",
      },
      tooltip: {
        x: {
          format: "HH:mm ", // добавить время
        },
        y: {
          formatter: undefined,
          title: {
            formatter: (seriesName: string) => {
              console.log(seriesName, 1111);
              if (seriesName === "wood") {
                return "Глазурь";
              }
              if (seriesName === "plain") {
                return "Глина";
              }
              return "";
            },
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
      type="line"
      height={350}
    />
  );
}

export default LineChartContainer;
