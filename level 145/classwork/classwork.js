import { readFile } from 'fs/promises';

async function readText() {
    try {
        const data = await readFile('./text.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

readText();