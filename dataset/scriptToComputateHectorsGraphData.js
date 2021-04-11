let csvToJson = require("convert-csv-to-json");

let fileName = "EstimateElextricConsumptionCleaned";
let fileInputName = fileName + ".csv";
let fileOutputName = fileName + ".json";

// csvToJson
//   .parseSubArray(",", ",", ",")
//   .generateJsonFileFromCsv(fileInputName, fileOutputName);
let json = csvToJson.getJsonFromCsv(fileInputName);

let data = new Map();
let itemPerYear = new Map();

let [Timestamp, date, estimate] = json[0][fileName].split(",");
console.log(Timestamp, date);
// console.log(json[0][fileName]);

// console.log(dateValue.split("-")[0]);
for (let i = 1; i < json.length; i++) {
  let [TimestampValue, dateValue, estimateValue] = json[i][fileName].split(",");
  let year = dateValue.split("-")[0];

  if (data.has(year)) {
    // data[year] += estimateValue;
    itemPerYear.set(year, itemPerYear.get(year) + 1);
    data.set(year, data.get(year) + Number(estimateValue));
  } else {
    data.set(year, 0);
    itemPerYear.set(year, 0);
  }
}

//https://cbeci.org
let jsonOutput = {
  BTC: [],
  UShouseHold: [],
  nycSubway: [],
  nyToSfRoundTrip: [],
};
// parse data
for (let [year, energyConsumed] of data) {
  // console.log(year, energyConsumed);
  let dailyAverage = energyConsumed / itemPerYear.get(year);
  let total = energyConsumed;
  let obj = {};
  obj[year] = total;

  if (year === "2020") jsonOutput["BTC"].push(obj);
}

function convertBthToTwh(bth) {
  // let billion = 1000000000;
  // conversioon to twh
  let twh = 3.412e12;
  return bth / twh;
}

//https://www.eia.gov/totalenergy/data/monthly/pdf/sec2.pdf
let trillion = 1000000000000; // values are in trillion
let residentUSbth = 20748 * trillion; // 2020 U.S household
let obj = {};
obj["2020"] = convertBthToTwh(residentUSbth);
jsonOutput["UShouseHold"].push(obj);

// nyc subway
// https://www.nycsubway.org/wiki/Subway_FAQ:_Facts_and_Figures
obj = {};
obj["2020"] = 1.8;
jsonOutput["nycSubway"].push(obj);

// tesla
// https://www.caranddriver.com/news/a34046953/tesla-range-strategy-details/
obj = {};
obj["1000000"] = 1.25;
obj["1"] = 0.00000125;
jsonOutput["nyToSfRoundTrip"].push(obj);

// average data

// airplane
// https://www.withouthotair.com/c5/page_36.shtml
// average 1750 kwh per fly for

// 73 kWh per 100 p-km.

// 3277700000 kwh to twh = 3.27
// 100,000 trips

console.log(jsonOutput);
