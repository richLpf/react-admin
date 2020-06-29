import React, { useRef, useState, useEffect } from "react";
import { option } from "./option";
import ReactEchart from "./ReactChart";

function EChart(props) {
  const [loading, setLoading] = useState(false);

  const chartRef = useRef(null);

  useEffect(() => {
    initChart();
  }, []);

  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
      },
    ],
  };

  const initChart = () => {
    if (chartRef.current) {
      const chartInstance = chartRef.current.getEchartsInstance();
      chartInstance.setOption(option);
      console.log("chartRef", chartRef);
    }
  };

  const getEchartsInstance = () => {
    const chartInstance = chartRef.current.getEchartsInstance();
    chartInstance.u_start = () => {
      setLoading(true);
      chartInstance.setOption({
        series: [],
        legend: {
          data: [],
        },
        title: { show: false },
        yAxis: { show: true },
        xAxis: { show: true },
        toolbox: { show: true },
      });
    };
    chartInstance.u_end = () => {
      setLoading(false);
    };
    chartInstance.u_error = (errorText) => {
      setLoading(false);
      const copyOption = option;
      copyOption.title = {
        show: true,
        text: errorText || "接口出错了，重试一下",
        left: "center",
        top: "middle",
      };
      copyOption.yAxis.show = false;
      copyOption.xAxis.show = false;
      copyOption.toolbox.show = false;
      copyOption.series = [];

      chartInstance.setOption(copyOption, true);
    };
    return chartInstance;
  };

  return (
    <div>
      <ReactEchart
        showLoading={loading}
        ref={chartRef}
        option={option}
      ></ReactEchart>
    </div>
  );
}

export default EChart;
