import React, { Fragment } from "react";

import { QuestionCircleOutlined } from "@ant-design/icons";

function HeaderInfo(props) {
  return (
    <Fragment>
      <div className="header-left"></div>
      <div className="header-right">
        <QuestionCircleOutlined />
        &nbsp;帮助说明
      </div>
    </Fragment>
  );
}

export default HeaderInfo;
