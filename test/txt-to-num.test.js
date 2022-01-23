import { describe, expect, it } from '@jest/globals';
import { TXTtoNUM } from '../src/txt-to-num';

describe('text to number', () => {
  it('takes txt file checks if it has numbers and returns them as an array', async () => {
    const input = '1.txt'; // destination to .txt file
    const reference = [688,904,607,299];
    const parsed = await TXTtoNUM(input);
    for (let i = 0; i < parsed.length; i++) {
      expect(parsed[i]).toEqual(reference[i])
    }
  });
});

describe('text to number 2', () => {
  it('takes txt file checks if it has numbers and returns ', async () => {
    const input = '3.txt'; // destination to .txt file
    const reference = [NaN,NaN,NaN];
    const parsed = await TXTtoNUM(input);
    for (let i = 0; i < parsed.length; i++) {
      expect(parsed[i]).toEqual(reference[i])
    }
  });
});

describe('text to number 3', () => {
  it('takes txt file checks if it has numbers and returns ', async () => {
    const input = '5.txt'; // destination to .txt file
    const reference = [995084,
      761358,
      434916,
      886148,
      59859,
      247349,
      131567,
      412054,
      595486,
      834857,
      343948,
      2966456,
      765221,
      915891,
      581366,
      707.354,
      15489,
      677247,
      498018,
      924374,
      521320,
      521169,
      401211,
      855827,
      83161,
      600730,
      605018,
      235714,
      722222,
      28297200.123,
      NaN
      ];
    const parsed = await TXTtoNUM(input);
    for (let i = 0; i < parsed.length; i++) {
      expect(parsed[i]).toEqual(reference[i])
    }
  });
});

