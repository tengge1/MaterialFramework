import React from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

class HomeController {
    rootRef = React.createRef();

    componentDidMount() {
        this.scrollbar = new PerfectScrollbar(this.rootRef.current);
        this.scrollbar.update();
    }

    componentWillUnmount() {
        if (this.scrollbar) {
            this.scrollbar.destroy();
            this.scrollbar = null;
        }
    }

    getProductionChange() {
        const year = new Date().getFullYear();
        return {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['大庆油田', '胜利油田', '江苏油田', '长庆油田', '克拉玛依油田'],
                top: 15
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [year - 6, year - 5, year - 4, year - 3, year - 2, year - 1, year]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '大庆油田',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '胜利油田',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '江苏油田',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '长庆油田',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '克拉玛依油田',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
    }
}

export default HomeController;