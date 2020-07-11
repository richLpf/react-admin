import React, { Fragment } from 'react'
import PieDemo from '@/page/chart/echarts/bar'
import { barOption } from './option'

function DashPie(props){

    console.log("props", props)

    return <Fragment>
        <PieDemo option={barOption}/>
    </Fragment>
}

export default DashPie