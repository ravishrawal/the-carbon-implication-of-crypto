let csvToJson = require("convert-csv-to-json");

let fileName = "Bitcoin_Energy_Consumption_Sector";
let fileInputName = fileName + ".csv";
let fileOutputName = fileName + ".json";

// csvToJson
//   .parseSubArray(",", ",", ",")
//   .generateJsonFileFromCsv(fileInputName, fileOutputName);
let json = csvToJson.getJsonFromCsv(fileInputName);

function convertBthToTwh(bth) {
  // let billion = 1000000000;
  // conversioon to twh
  let twh = 3.412e12;
  return bth / twh;
}

// let someVal = json[0][fileName].split(",");
// console.log(json);

//https://www.eia.gov/totalenergy/data/monthly/pdf/sec2.pdf
// https://www.eia.gov/tools/faqs/faq.php?id=97&t=3
let trillion = 1000000000000; // values are in trillion
let residentUSbth = 111 * trillion; // 2020 U.S household
// let obj = {};
ans = convertBthToTwh(residentUSbth);
console.log("twh", ans);
// jsonOutput["UShouseHold"].push(obj);

// console.9log(json[0][fileName]);
// console.log();

// console.log(dateValue.split("-")[0]);
// for (let i = 1; i < json.length; i++) {
//   let [TimestampValue, dateValue, estimateValue] = json[i][fileName].split(",");
//   let year = dateValue.split("-")[0];

//   if (data.has(year)) {
//     // data[year] += estimateValue;
//     itemPerYear.set(year, itemPerYear.get(year) + 1);
//     data.set(year, data.get(year) + Number(estimateValue));
//   } else {
//     data.set(year, 0);
//     itemPerYear.set(year, 0);
//   }
// }

// console.log()

//https://cbeci.org
let jsonOutput = {
  BTC: [],
  UShouseHold: [],
  nycSubway: [],
  nyToSfRoundTrip: [],
};
