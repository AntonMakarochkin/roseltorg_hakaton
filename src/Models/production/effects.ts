import { createEffect } from 'effector';

const ids = [
	'https://api.github.com/users/iliakan',
	'https://api.github.com/users/remy',
	'https://no-such-url',
];

export const fetchProductionChartsFx = createEffect(async () => {
	const fetches = ids.map((id) => fetch(id).then((res) => res.json()));

	return Promise.allSettled(fetches).then((result) => {
		return result.map(() => {
			// if (item.status === 'fulfilled') {
			// 	return item.value;
			// }
			return {
				forecast: 130,
				plan: 30,
				fact: 30,
			};
		});
	});
});
