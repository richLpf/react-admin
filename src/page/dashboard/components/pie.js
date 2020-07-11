import React, { Fragment } from 'react'
import PieDemo from '@/page/chart/echarts/pie'
import { pieOption } from './option'

function DashPie(props){

    console.log("props", props)

    return <Fragment>
        <PieDemo option={pieOption}/>
    </Fragment>
}

export default DashPie