import { readdir, copyFile, mkdir, stat } from 'fs/promises';
import { makeHTML, makeSections } from './make-html.js';
import { createNumObject } from './num-calc.js';

import { TXTtoNUM } from './txt-to-num.js';

const DIR = './data'
const OUT_DIR = './dist'

async function direxists(dir) {
    try {
        const info = await stat(dir);
        return info.isDirectory();
    } catch (e) {
        return false;
    }
}

async function main() {
    if (!(await direxists(OUT_DIR))) {
        await mkdir(OUT_DIR);
    }

    const files = await readdir(DIR);
    console.log('files: ', files);

    // moves the 10,11 and 12.txt files to teh end
    files.splice(11, 0, files.splice(1, 1)[0]);
    files.splice(11, 0, files.splice(1, 1)[0]);
    files.splice(11, 0, files.splice(1, 1)[0]);

    const sections = [];
    for (const file of files) {
        const num = await TXTtoNUM(file)
        sections.push(num)
    }

    
    const sectionObjects = [];
    sections.forEach(async el =>  {
        sectionObjects.push(createNumObject(el));
    });

    const parsedSections = await makeSections(sectionObjects);
    makeHTML(parsedSections);
    copyFile('src/main.css','./dist/main.css')

}

main().catch((err) => console.error(err))