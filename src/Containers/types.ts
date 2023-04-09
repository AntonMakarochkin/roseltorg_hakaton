import type { EChartsOption, SetOptionOpts } from 'echarts';

export interface ReactEChartsProps {
	option: EChartsOption;
	settings?: SetOptionOpts;
	loading?: boolean;
	theme?: 'light' | 'dark';
	width?: string | undefined;
}

export interface CompoundPieChartProps {
	flag?: boolean;
	marginLeft?: number | string;
	upMenuMargin?: number | string;
	title: string;
	titlePosition?: {
		top: string;
		left: string;
	};
}

export interface ChartProps {
	title?: string;
	subTitle?: string;
}


export interface LineChartContainerProps {
	wood: Array<Array<number>>;
	plain: Array<Array<number>>;
}
export interface BarChartContainerProps {
	data: Array<number>;
}