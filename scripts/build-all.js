import {readFile} from 'fs/promises';
import {exec} from "node:child_process";

const pagesInfo = JSON.parse(
    await readFile(
        new URL('./multiPages.json', import.meta.url)
    )
);

const buildCommand = pagesInfo.map(m => m['run:build']).filter(f => f);
buildCommand.forEach(command => {
    console.log(`command = ${command}`)
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Execution failed: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`Execution stderr: ${stderr}`);
        }
        console.log(`Command output: ${stdout}`);
    });
})