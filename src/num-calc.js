import { mean, median, sum, variance } from 'mathjs';

export function getStandardDeviation(arr) {
	const n = arr.length;
	const m = arr.reduce((a, b) => a + b) / n;
	const num = Math.sqrt(
		arr.map((x) => (x - m) ** 2).reduce((a, b) => a + b) / n
	);
	return Math.round((num + Number.EPSILON) * 100) / 100;
}

function decimals(num) {
	return Math.round((num + Number.EPSILON) * 100) / 100;
}

export function createNumObject(fileObj) {
	const NAME = fileObj.name;
	const VAR =
		fileObj.data[0] && fileObj.data[1]
			? decimals(variance(fileObj.data))
			: 'Not available';
	const MAX =
		fileObj.data[0] && fileObj.data[1]
			? decimals(Math.max(...fileObj.data))
			: 'Not available';
	const MEAN =
		fileObj.data[0] && fileObj.data[1]
			? decimals(mean(fileObj.data))
			: 'Not available';
	const MED =
		fileObj.data[0] && fileObj.data[1]
			? decimals(median(fileObj.data))
			: 'Not available';
	const MIN =
		fileObj.data[0] && fileObj.data[1]
			? decimals(Math.min(...fileObj.data))
			: 'Not available';
	const SDEV =
		fileObj.data[0] && fileObj.data[1]
			? decimals(getStandardDeviation(fileObj.data))
			: 'Not available';
	const SUM =
		fileObj.data[0] && fileObj.data[1]
			? decimals(sum(fileObj.data))
			: 'Not available';
	const RANGE =
		fileObj.data[0] && fileObj.data[1] ? MAX - MIN : 'Not available';
	const f = NAME.split('.')[0];
	const LINK = `${f}.html`;
	const obj = {
		name: NAME,
		var: VAR,
		max: MAX,
		mean: MEAN,
		med: MED,
		min: MIN,
		sdev: SDEV,
		sum: SUM,
		range: RANGE,
		link: LINK,
		raw: fileObj.data,
	};
	return obj;
}
