(async() => {
  require('dotenv').config({});
  const { GoogleSpreadsheet } = require("google-spreadsheet");
  const spreadsheetId = "1gi_4pWVgFSCVLkCtDeR6MOm-LIX_WEsyq_987yptChk";
  const clientEmail = process.env.CLIENT_EMAIL,
    privateKey = process.env.PRIVATE_KEY;
  const doc = new GoogleSpreadsheet(spreadsheetId);

  await doc.useServiceAccountAuth({
    client_email: clientEmail,
    private_key: privateKey,
  });

  await doc.loadInfo();

  // print: Document Name
  // console.log(doc.title);

  // change: Document Name
  // await doc.updateProperties({
  //   title: "Articles"
  // })
  // console.log(doc.title);

  // get: sheets by index
  // const sheet = doc.sheetsByIndex[0];

  // print: sheet title
  // console.log(sheet.title);

  // change: sheet title
  // await sheet.updateProperties({
  //   title: "Articles"
  // })
  // console.log(sheet.title);

  // get: total rows and columns in sheet
  // console.log(sheet.rowCount);
  // console.log(sheet.columnCount);

  // get: sheet by title
  let sheet = doc.sheetsByTitle["New Articles"];

  // create: new sheet with header's row
  // let sheet = await doc.addSheet({
  //   headerValues: ['Title', 'Author'],
  //   title: "New Articles"
  // })
  // console.log(sheet.title);

  // delete: sheet
  // sheet
  //   .delete()
  //   .then(() => console.log("Deleted"))
  //   .catch((err) => console.log(err));

  // adding: new row to sheet
  // let firstRow = await sheet.addRow({
  //   Title: "First title",
  //   Author: "First author",
  // });
  // console.log(firstRow);

  // get: all rows
  // let rows = await sheet.getRows();

  // sheet
  //   .loadHeaderRow()
  //   .then((result) => console.log(result))
  //   .catch((err) => console.log(err));
})();