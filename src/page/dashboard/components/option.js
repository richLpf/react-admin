export const pieOption = {
    title: {
        text: '变更地域分布',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        bottom: 10,
        left: 'right',
        data: ['西凉', '益州', '兖州', '荆州', '幽州']
    },
    series: [
        {
            name: '姓名',
            type: 'pie',
            radius: '55%',
            data: [
                {value: 535, name: '荆州'},
                {value: 510, name: '兖州'},
                {value: 634, name: '益州'},
                {value: 735, name: '西凉'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
export const barOption = {
  title: {
    text: '变更产品数',
    subtext: '副标题',
    left: 'center'
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(220, 220, 220, 0.8)",
      },
    },
  ],
}
