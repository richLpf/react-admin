import React, { forwardRef } from "react";
import ReactEchartsCore from "echarts-for-react/lib/core";
import echarts from "echarts/lib/echarts";
import "echarts/theme/macarons";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/line";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/toolbox";
import "echarts/lib/component/legend";
import "echarts/lib/component/legendScroll";

const loadingOption = {
  text: "数据加载中...",
  color: "#1890FF",
  textColor: "#000",
  maskColor: "rgba(255, 255, 255, 0.8)",
  zlevel: 0,
};

function ReactChart(props, ref) {
  return (
    <ReactEchartsCore
      echarts={echarts}
      loadingOption={loadingOption}
      option={{}}
      ref={ref}
      theme="macarons"
      {...props}
    />
  );
}

export default forwardRef(ReactChart);
