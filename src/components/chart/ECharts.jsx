import React from 'react';
import ReactEcharts from "echarts-for-react";

class ECharts extends React.Component {
    render() {
        const { option, notMerge, lazyUpdate, theme, onChartReady, onEvents, opts } = this.props;

        return <ReactEcharts
            option={option}
            notMerge={notMerge === false ? false : true}
            lazyUpdate={lazyUpdate === false ? false : true}
            theme={theme}
            onChartReady={onChartReady}
            onEvents={onEvents}
            opts={opts} />;
    }
}

export default ECharts;