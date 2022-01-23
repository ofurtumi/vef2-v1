import { writeFile } from 'fs/promises'
import { join } from 'path';
// import pkg from 'prettier';
// const { prettier } = pkg;


const INDEX = './dist/index.html'
const PATH = './dist'
const top = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <title>tölur</title>
</head>
<body>
`;

const bottom = `
</body>
</html>`;

let body = '';

export function makeSections(objArray) {
    let section = '';
    objArray.forEach(obj => {
        if (!isNaN(obj.var)) {
        section += `<section>
<h1>${obj.name}</h1>
<ul>
    <li>variance: ${obj.var}</li>
    <li>max: ${obj.max}</li>
    <li>mean: ${obj.mean}</li>
    <li>median: ${obj.med}</li>
    <li>min: ${obj.min}</li>
    <li>s. deviation: ${obj.sdev}</li>
    <li>sum: ${obj.sum}</li>
    <li>range: ${obj.range}</li>
</ul>
<a href="${obj.link}">more info</a>
</section>`
        
        makePage(obj);
}
        else {
            section += `<section>
<h1>${obj.name}</h1>
    <p>data is corrupted or wrong</p>
</section>`
            
        }
    });
    return section
}

export function makeHTML(body) {
    let HTML = top;
    HTML += body;
    HTML += bottom;
    // HTML = prettier.format(HTML, {parser: "html"});
    writeFile(INDEX,HTML)
    return HTML;
}

export function makePage(obj) {
    let link = obj.name;
    link = link.split(".")[0];
    link = join(PATH,(link+'.html'))
    let page = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="main.css">
        <title>${obj.name}</title>
    </head>
    <body>
    <main>
    <h1>${obj.name}</h1>
    <ul>
    <li><p>variance: </p><p>${obj.var}</p></li>
    <li><p>max (highest number): </p><p>${obj.max}</p></li>
    <li><p>mean: </p><p>${obj.mean}</p></li>
    <li><p>median: </p><p>${obj.med}</p></li>
    <li><p>min (lowest number): </p><p>${obj.min}</p></li>
    <li><p>standard deviation: </p><p>${obj.sdev}</p></li>
    <li><p>sum: </p><p>${obj.sum}</p></li>
    <li><p>range: </p><p>${obj.range}</p></li>
    </ul>
    <h2>raw data:</h2>
    <div><p>${obj.raw}</p></div>
    </main>
    <a href="./index.html">home</a>
    </body>
    </html>`

    writeFile(link,page)
}