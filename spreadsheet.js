const GoogleSpreadsheet = require('google-spreadsheet');
const {promisify} = require('util');

const creds = require('./client-screen.json');

async function accessSpreadsheet(){
    const doc = new GoogleSpreadsheet('1Tb0vXDM7tpC2hC3x-8oORvOPKq-yWKD6Mc04lO5KgDE');
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheet[0];
    console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`);
}

accessSpreadsheet();