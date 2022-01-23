import { readdir, copyFile, mkdir, stat } from 'fs/promises';
import { makeHTML, makeSections, makePage } from './make-html.js';
import { createNumObject } from './num-calc.js';

import { TXTtoNUM } from './txt-to-num.js';

const DIR = './data'
const OUT_DIR = './dist'


async function main() {
    if (!(await direxists(OUT_DIR))) {
        await mkdir(OUT_DIR);
    }

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
    copyFile('src/main.css','./dist/main.css')

}

main().catch((err) => console.error(err))

Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
  };

async function direxists(dir) {
    try {
        const info = await stat(dir);
        return info.isDirectory();
    } catch (e) {
        return false;
    }
}