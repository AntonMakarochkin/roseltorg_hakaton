import ReactECharts from 'echarts-for-react';

import { ChartProps } from './types';

import styles from './Chart.module.css';

function Chart({ option, title, setOption }: ChartProps) {
	console.log(setOption);
	return (
		<div className={styles.root}>
			<title>{title}</title>
			<ReactECharts
				option={option}
				lazyUpdate={true}
				style={{ height: '500px', width: '100%' }}
			/>
		</div>
	);
}

export default Chart;
