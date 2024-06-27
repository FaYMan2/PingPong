import express from 'express';
import { Pinger } from './pinger.js';
import fs from 'fs'


const app = express()



let jsonData = null
const filePath = process.argv[2];
if (!filePath) {
    console.error('Please provide a JSON file path as a command line argument.');
    process.exit(1);
}

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err.message}`);
        process.exit(1);
    }

    try {
        jsonData = JSON.parse(data);
        getResults(jsonData)
    } catch (parseErr) {
        console.error(`Error parsing JSON: ${parseErr.message}`);
        process.exit(1);
    }
});


async function getResults(jsonData){
    const pingResults = await Pinger(jsonData)
    console.log(pingResults)
}