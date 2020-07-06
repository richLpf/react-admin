import React, { Fragment } from 'react'
import { Chart, Axis, Tooltip, Geom } from 'bizcharts'

function TestBar(props){
    // 随便mock一下数据
    const ticks = ['we', 'are', 'the', 'black', 'gold', 'team'];
    const mockData = () => {
        let result = [];

        for (let i = 0, len = 6; i < len; i++) {
            result.push({
                xAxis: ticks[i],
                yAxis: Math.floor(Math.random() * 100)
            });
        }

        return result;
    };

    return <Fragment>
        // 图表组件
        <Chart
            width={ 600 }
            height={ 400 }
            data={ mockData() }
        >
            {/* x轴，横轴，以data数据的xAxis属性值为柱子的值 */}
            <Axis name="xAxis" />
            {/* y轴，纵轴，以data数据的yAxis属性值为柱子的值 */}
            <Axis name="yAxis" />
            {/* 鼠标hover直方图柱子的时候，tooltip显示的值 */}
            <Tooltip />
            {/* 几何标记对象，主要用以描述你要画的是什么图形（直方图、折线图、饼状图、区域图）：interval是直方图 */}
            <Geom
                type="interval"
                position="xAxis*yAxis"
            />
        </Chart>
    </Fragment>    
}

export default TestBar

