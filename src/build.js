import { readdir } from 'fs/promises';
import { makeHTML, makeSections, makePage } from './make-html.js';
import { createNumObject } from './num-calc.js';

import { TXTtoNUM } from './txt-to-num.js';

const DIR = './data'
const BUILT = './public/index.html'

async function main() {
    const files = await readdir(DIR);
    console.log('files: ', files);

    files.move(1,11)
    files.move(1,11)
    files.move(1,11)
    let sections = [];
    for (const file of files) {
        const num = await TXTtoNUM(file)
        sections.push(num)
    }

    // console.log(sections)
    
    let sectionObjects = [];
    sections.forEach(async el =>  {
        sectionObjects.push(createNumObject(el));
    });

    let parsedSections = await makeSections(sectionObjects);
    let HTML = makeHTML(parsedSections);
}

main().catch((err) => console.error(err))

Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
  };