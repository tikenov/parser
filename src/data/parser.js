const fs = require("fs");
const XLSX = require("xlsx");
const schema = require("./schema");

const readFileContent = (file) => {
  const table = XLSX.readFile(folder + file);
  const sheet = table.Sheets[table.SheetNames[0]];
  const range = XLSX.utils.decode_range(sheet["!ref"]);
  range.s.r = 3;
  for (var r = range.s.r; r <= range.e.r; ++r) {
    let row = {};
    for (var c = range.s.c; c <= range.e.c; ++c) {
      let cell_ref = XLSX.utils.encode_cell({ c, r });
      row[schema[c].name] = sheet[cell_ref] ? sheet[cell_ref].v : null;
    }
    row.row = r;
    row.fn = file;
    result.count++;
    result.data.push(row);
  }
};

const folder = "./excel/";
const result = { count: 0, data: [] };

fs.readdirSync(folder).forEach((file) => {
  if (/\.xlsx$/.test(file)) readFileContent(file);
});

fs.writeFile(folder + "data.json", JSON.stringify(result), (err) => {
  if (err) throw err;
  console.log("*** data.json is saved.");
});
