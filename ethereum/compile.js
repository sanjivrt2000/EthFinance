const path = require('path'); //generates a valid path to inbox.sol
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const ethFinanceSolPath = path.resolve(__dirname, 'contracts', 'ethFinance.sol');
const source = fs.readFileSync(ethFinanceSolPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output){
    fs.outputJsonSync(path.resolve(buildPath, contract.replace(':', '') + '.json'),output[contract]);
}
