import { describe, expect, it } from '@jest/globals';
import { createNumObject } from '../src/num-calc';

describe('math calc', () => {
  it('checks if calculations are done right', () => {
    const input = {"name": "1.txt","data": [1,2,3,4,5]}

    const obj = createNumObject(input);
    expect(obj).toStrictEqual({"name": "1.txt", "var": 2.5, "max": 5, "mean": 3, "med": 3, "min": 1, "sdev": 1.41, "sum": 15, "range": 4, 'link': '1.html', 'raw': [1,2,3,4,5]})
  });
});