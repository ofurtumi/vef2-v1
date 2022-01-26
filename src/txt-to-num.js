import { readFile } from "fs/promises";
import { join } from "path";

const DATA_DIR = "./data";

export async function TXTtoNUM(file) {
	const path = join(DATA_DIR, file);
	const data = await readFile(path);
	const dataStr = data.toString("utf-8");
	// const arr = dataStr.split('\n').map((item) => parseInt(item, 10))
	const arr = dataStr.split("\n").map((item) => {
		if (item.includes(".")) item = item.replaceAll(".", "");
		if (item.includes(",")) item = item.replaceAll(",", ".");
		if (item === "") return NaN;
		return Number(item);
	});

	const newArray = arr.filter((value) => !Number.isNaN(value));

	const numObj = { name: file, data: newArray };
	// console.log('obj -> ',path,' -> ',arr)

	return numObj;
}
