const option = (title = "", series = []) => {
  return {
    title: {
      text: title,
      left: "center",
      textStyle: {
        fontSize: 14,
      },
    },
    animation: false,
    tooltip: {
      confine: true,
      trigger: "axis",
      axisPointer: {
        animation: true,
      },
    },
    legend: {
      type: "scroll",
      top: "bottom",
      data: [],
    },
    xAxis: {
      type: "time",
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      nameTextStyle: {
        color: "#999999",
      },
      type: "value",
      minInterval: 1,
      boundaryGap: [0, "30%"],
      splitLine: {
        show: true,
      },
      axisLine: {
        lineStyle: {
          color: "#333",
        },
      },
    },
    series: series ? series : undefined,
  };
};

export { option };
