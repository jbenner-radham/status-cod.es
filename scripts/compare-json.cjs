const fs = require('node:fs');
const path = require('node:path');

const parseJsonFile = (filepath) => {
    return JSON.parse(fs.readFileSync(filepath).toString());
};

if (process.argv.length !== 4) {
    const scriptName = path.basename(process.argv[1]);
    console.error(`The required usage is: ${scriptName} <CURRENT> <INCOMING>`);
    process.exit(1);
}

const currentFilepath = process.argv[2];
const incomingFilepath = process.argv[3];
const current = parseJsonFile(currentFilepath);
const incoming = parseJsonFile(incomingFilepath);
const differences = [];

if (!Array.isArray(current) || !Array.isArray(incoming)) {
    console.error('One or more JSON files are not arrays');
    process.exit(1);
}

console.log('Starting check');

if (current.length !== incoming.length) {
    console.error(
        `The current amount of status codes is ${current.length} while the incoming one is ${incoming.length}`
    );
    process.exit(1);
}

current.forEach((currentStatusCode, index) => {
    const incomingStatusCode = incoming[index];

    if (currentStatusCode.value !== incomingStatusCode.value) {
        differences.push({
            index,
            currentName: currentStatusCode.name,
            incomingName: incomingStatusCode.name
        });
    }

    if (currentStatusCode.description !== incomingStatusCode.description) {
        differences.push({
            index,
            currentDescription: currentStatusCode.description,
            incomingDescription: incomingStatusCode.description
        });
    }

    if (currentStatusCode.reference !== incomingStatusCode.reference) {
        differences.push({
            index,
            currentReference: currentStatusCode.reference,
            incomingReference: incomingStatusCode.reference
        });
    }
});

if (differences.length) {
    console.error(differences);
    process.exit(1);
} else {
    console.log('No differences found');
}
