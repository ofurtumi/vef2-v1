import { describe, expect, it } from '@jest/globals';
import { makeHTML, makeSections } from '../src/make-html';

describe('make-html sections', () => {
  it('takes array of arrays and creates sections from each of the inner arrays', () => {
    const input = [
      {
        "name": "test",
        "var": 10,
        "max": 50,
        "mean": 25,
        "med": 10,
        "min": 50,
        "sdev": 20,
        "sum": 500,
        "range": 6,
        "link": 'test.html'
      }
    ]

    const body = makeSections(input);
    // console.log(html)
    expect(body).toBe(`<section>
<h1>test</h1>
<ul>
    <li><p>variance: </p><p>10</p></li>
    <li><p>max: </p><p>50</p></li>
    <li><p>mean: </p><p>25</p></li>
    <li><p>median: </p><p>10</p></li>
    <li><p>min: </p><p>50</p></li>
    <li><p>s.dev: </p><p>20</p></li>
    <li><p>sum: </p><p>500</p></li>
    <li><p>range: </p><p>6</p></li>
</ul>
<a href="test.html">more info</a>
</section>`)
  });
});

describe('make-html NaN test', () => {
  it('checks if item is NaN and does not return it if thats the case', () => {
    const input = [
      {
        "name": "test",
        "var": NaN,
        "max": NaN,
        "mean": NaN,
        "med": NaN,
        "min": NaN,
        "sdev": NaN,
        "sum": NaN,
        "range": NaN,
        "link": 'test.html'
      }
    ]

    const test = makeSections(input);
    // console.log(html)
    expect(test).toBe(`<section>
<h1>test</h1>
    <p>data is corrupted or wrong</p>
</section>`)
  });
});

describe('make-html HTML', () => {
  it('takes body string and adds top and bottom', () => {
    const input = "<section><ul><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul></section>"

    const html = makeHTML(input);
    // console.log(html)
    expect(html).toBe(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <title>tölur</title>
</head>
<header>
    <p>information calculated from data.txt files</p>
    <p>all decimals are rounded up to two points to make everything easier to read</p>
</header>
<body>
<section><ul><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul></section>
</body>
</html>`)
  });
});