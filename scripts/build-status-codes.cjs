const fs = require('node:fs');
const path = require('node:path');
const statusCodes = require('http-status-code-registry');

(async () => {
    const jsonPath = path.resolve(__dirname, '../public/index.json');

    fs.writeFileSync(jsonPath, JSON.stringify(await statusCodes(), null, 4) + '\n');
})();
