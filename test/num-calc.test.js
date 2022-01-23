import { describe, expect, it } from '@jest/globals';
import { createNumObject, getStandardDeviation } from '../src/num-calc';

describe('math calc', () => {
  it('checks if calculations are done right', () => {
    const input = {"name": "1.txt","data": [1,2,3,4,5]}

    const obj = createNumObject(input);
    expect(obj).toStrictEqual({"name": "1.txt", "var": 2.5, "max": 5, "mean": 3, "med": 3, "min": 1, "sdev": 1.41, "sum": 15, "range": 4, 'link': '1.html', 'raw': [1,2,3,4,5]})
  });
});

describe('math calc', () => {
  it('checks if standard deviation is calculated correctly', () => {
    const input = [3,5,7]

    const sdev = getStandardDeviation(input);
    expect(sdev).toBe(1.63)
  });
});