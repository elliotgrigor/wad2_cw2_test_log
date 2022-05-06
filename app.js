const fs = require('fs');
const PDFDocument = require('pdfkit-table');
const rows = require('./data.js');

let testLog = new PDFDocument({
  margin: 30,
  size: 'A4',
  layout: 'landscape',
});

testLog.pipe(fs.createWriteStream('./test_log.pdf'));

const table = {
  title: 'WAD2 CW2 Restaurant Website Test Log',
  headers: [
    'ID',
    'Test Case',
    'Expected Outcome',
    'Test Result',
    'Pass/Fail',
    'Comments',
  ],
  rows,
};

testLog.table(table, {
  // 780px + (2 * 30px) = 840px (A4 landscape width)
  columnsSize: [ 40, 135, 200, 145, 65, 195 ],
});

testLog.end();
