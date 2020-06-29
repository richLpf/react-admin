import React, { Fragment } from "react";
import ReactChart from "../component/ReactChart";

function Bar(props) {
  const { option } = props;

  return (
    <Fragment>
      <ReactChart option={option} />
    </Fragment>
  );
}

export default Bar;
