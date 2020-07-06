import React, { Fragment, useState } from 'react'
import RichEditor from '@/component/RichEditor'

function Editor(){

    const [value, setValue] = useState("")
    const initValue = "你是谁？"

    return <Fragment>
        <RichEditor setValue={()=>setValue(value)} value={initValue} style={{border: "1px solid #333;"}}/>
    </Fragment>
}

export default Editor