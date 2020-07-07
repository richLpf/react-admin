import React, { Fragment } from "react";
import { Result, Button } from 'antd'

function NotFound() {
  return <Fragment>
  	<Result
	    status="404"
	    title="404"
	    subTitle="Sorry, the page you visited does not exist."
	    extra={<Button type="primary">Back Home</Button>}
	/>
  </Fragment>;
}

export default NotFound;
