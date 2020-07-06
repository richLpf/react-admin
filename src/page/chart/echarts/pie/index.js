import React, { Fragment } from "react";
import ReactChart from "../component/ReactChart";

function Pie(props) {
  const { option } = props;
  return (
    <Fragment>
      <ReactChart option={option} />
    </Fragment>
  );
}

export default Pie
