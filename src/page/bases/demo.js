import React, { Fragment, useRef } from "react";
//import Test from './index'

function Demo() {
  const child = useRef(null);

  console.log("child", child);

  return (
    <Fragment>
      <div ref={child}>test</div>
    </Fragment>
  );
}

export default Demo;
