import React, { Fragment } from 'react'

function About(props){
	return <Fragment>
		<iframe id="inlineFrameExample"
		    title="Inline Frame Example"
		    width="100%"
		    height="100%"
		    onLoad={()=>{console.log("iframe载入成功")}}
		    src="http://www.runoob.com">
		</iframe>
	</Fragment>
}

export default About