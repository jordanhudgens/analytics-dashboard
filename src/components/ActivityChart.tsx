import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export interface IChartSeriesItem {
  name: string;
  type: string;
  data: number[];
}

interface IChartProps {
  series: IChartSeriesItem[];
  labels: string[];
  name: string;
}

const ActivityChart = (props: IChartProps) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (props.series && props.labels) {
      setData({
        series: props.series,
        options: {
          chart: {
            height: 420,
            type: "line",
            stacked: false,
          },
          stroke: {
            width: [0, 2, 5],
            curve: "smooth",
          },
          plotOptions: {
            bar: {
              columnWidth: "50%",
            },
          },

          fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
              inverseColors: false,
              shade: "light",
              type: "vertical",
              opacityFrom: 0.85,
              opacityTo: 0.55,
              stops: [0, 2, 4, 6],
            },
          },
          labels: props.labels,
          markers: {
            size: 0,
          },
          xaxis: {
            type: "datetime",
          },
          yaxis: {
            title: {
              text: props.name,
            },
            min: 0,
          },
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function (y: any) {
                if (typeof y !== "undefined") {
                  return `${y.toFixed(0)} ${props.name}`;
                }
                return y;
              },
            },
          },
        },
      });
    }
  }, [props.series, props.labels]);

  if (!data) {
    return null;
  }

  return (
    <div style={{ width: "100%" }}>
      <Chart
        options={data.options}
        series={data.series}
        type="area"
        height={420}
      />
    </div>
  );
};

export default ActivityChart;
