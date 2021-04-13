let csvToJson = require("convert-csv-to-json");

let fileName = "EstimateElextricConsumptionCleaned";
let fileInputName = fileName + ".csv";
let fileOutputName = fileName + ".json";

// csvToJson
//   .parseSubArray(",", ",", ",")
//   .generateJsonFileFromCsv(fileInputName, fileOutputName);
let json = csvToJson.getJsonFromCsv(fileInputName);

// bitcoin
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

//
let jsonEnergy = csvToJson.getJsonFromCsv(
  "fossil_And_renewable_energy_consumption.csv"
);

let jsonOutput = {
  BTC: [],
  BTCRate: [],
  BTCrenewable: [],
  BTCfossil: [],
  renewable: [],
  renewableRate: [],
};

// console.log("what", d);
// console.log(dateValue.split("-")[0]);
for (let i = 1; i < jsonEnergy.length; i++) {
  let d = jsonEnergy[i]["Year,Coal(TWh"].split(",");
  let energyYear = d[0];
  let renewableEnergy = d[d.length - 2]; // renewavle
  let fossil_energy = d[d.length - 3]; // fossil
  if (energyYear >= 2015) {
    jsonOutput["renewable"].push([energyYear, renewableEnergy]);
    // console.log(energyYear, renewableEnergy);
  }
}

// console.log("jsonEnergy", jsonEnergy);

//https://cbeci.org

// parse data
// Bit coin
for (let [year, energyConsumed] of data) {
  // console.log(year, energyConsumed);
  let dailyAverage = energyConsumed / itemPerYear.get(year);
  let total = dailyAverage;
  let obj = {};
  obj[year] = total;

  // if (year === "2020")
  jsonOutput["BTC"].push([year, total]);
}

//  bitcoin rate
let bitcoinData = jsonOutput["BTC"];
let sumBTC = 0;
let count = 0;
for (let i = 0; i < bitcoinData.length - 1; i++) {
  let thisYaerEnergy = bitcoinData[i][1];
  let nextYearEnergy = bitcoinData[i + 1][1];
  let rate = 100 - (thisYaerEnergy * 100) / nextYearEnergy;
  let yearRate = bitcoinData[i][0] + "-" + bitcoinData[i + 1][0];

  // console.log(renewableData[i][0], "-", renewableData[i + 1][0], rate);
  let obj = {};
  obj[yearRate] = rate;
  sumBTC += rate;
  jsonOutput["BTCRate"].push(obj);
  count++;
}
jsonOutput["BTCRate"].push({ average: sumBTC / count });

//  renewable rate
let renewableData = jsonOutput["renewable"];
for (let i = 0; i < renewableData.length - 1; i++) {
  let thisYaerEnergy = renewableData[i][1];
  let nextYearEnergy = renewableData[i + 1][1];
  let rate = 100 - (thisYaerEnergy * 100) / nextYearEnergy;
  let yearRate = renewableData[i][0] + "-" + renewableData[i + 1][0];

  // console.log(renewableData[i][0], "-", renewableData[i + 1][0], rate);
  let obj = {};
  obj[yearRate] = rate;
  jsonOutput["renewableRate"].push(obj);
}

// BTC prediction
for (let i = 2022; i <= 2030; i++) {
  let prevYearEnergy = jsonOutput["BTC"][jsonOutput["BTC"].length - 1][1];
  let nextYearEnergy = 0.43 * prevYearEnergy + prevYearEnergy;
  jsonOutput["BTC"].push([String(i), nextYearEnergy]);
  //console.log("prevYearEnergy", prevYearEnergy);
}

// BTCrenewable: [],
// BTCfossil: [],

// BTC renewable

// 2021 36% from dayta
let renewableEE = 0;
{
  let nextYearEnergy = 117.5;
  let nextYearEnergyR = 0.39 * 117.5;
  renewableEE = nextYearEnergyR;
  let thisYearRenewableData = { x: 2021, y: nextYearEnergyR };
  let thisYearfossilData = { x: 2021, y: nextYearEnergy - nextYearEnergyR };
  jsonOutput["BTCrenewable"].push(thisYearRenewableData);
  jsonOutput["BTCfossil"].push(thisYearfossilData);
}

for (let i = 2022; i <= 2030; i++) {
  renewableEE = 0.05 * renewableEE + renewableEE;

  // search for the year
  for (let j = 0; j < jsonOutput["BTC"].length; j++) {
    if (i == jsonOutput["BTC"][j][0]) {
      let nextYearEnergy = jsonOutput["BTC"][j][1];
      // console.log(jsonOutput["BTC"][j][0], "wow");
      let thisYearRenewableData = { x: i, y: renewableEE };
      let thisYearfossilData = { x: i, y: nextYearEnergy - renewableEE };
      jsonOutput["BTCrenewable"].push(thisYearRenewableData);
      jsonOutput["BTCfossil"].push(thisYearfossilData);

      // console.log("miss", i, jsonOutput["BTC"][j][1], renewableEE);

      break;
    }
  }
}

renewableEE = 0.39 * 117.5;
for (let i = 2020; i >= 2015; i--) {
  renewableEE = renewableEE - 0.05 * renewableEE;

  // search for the year
  for (let j = 0; j < jsonOutput["BTC"].length; j++) {
    if (i == jsonOutput["BTC"][j][0]) {
      let nextYearEnergy = jsonOutput["BTC"][j][1];
      // console.log(jsonOutput["BTC"][j][0], "wow");
      let thisYearRenewableData = { x: i, y: renewableEE };
      let thisYearfossilData = { x: i, y: nextYearEnergy - renewableEE };
      if (i >= 2018) {
        jsonOutput["BTCrenewable"].unshift(thisYearRenewableData);
        jsonOutput["BTCfossil"].unshift(thisYearfossilData);
      } else {
        // thisYearfossilData = { x: i, y: nextYearEnergy - renewableEE };
        thisYearRenewableData = { x: i, y: nextYearEnergy * 0.05 };
        thisYearfossilData = { x: i, y: nextYearEnergy * 0.95 };
        jsonOutput["BTCfossil"].unshift(thisYearfossilData);
        jsonOutput["BTCrenewable"].unshift(thisYearRenewableData);
      }

      // console.log("miss", i, jsonOutput["BTC"][j][1], renewableEE);

      break;
    }
  }
}

// console.log(jsonOutput);

// function convertBthToTwh(bth) {
//   // let billion = 1000000000;
//   // conversioon to twh
//   let twh = 3.412e12;
//   return bth / twh;
// }

// //https://www.eia.gov/totalenergy/data/monthly/pdf/sec2.pdf
// // https://www.eia.gov/tools/faqs/faq.php?id=97&t=3
// let trillion = 1000000000000; // values are in trillion
// let residentUSbth = 20748 * trillion; // 2020 U.S household
// let obj = {};
// obj["2020"] = convertBthToTwh(residentUSbth);
// jsonOutput["UShouseHold"].push(obj);

// // nyc subway
// // https://www.nycsubway.org/wiki/Subway_FAQ:_Facts_and_Figures
// obj = {};
// obj["2020"] = 1.8;
// jsonOutput["nycSubway"].push(obj);

// // tesla
// // https://www.caranddriver.com/news/a34046953/tesla-range-strategy-details/
// obj = {};
// obj["1000000"] = 1.25;
// obj["1"] = 0.00000125;
// jsonOutput["nyToSfRoundTrip"].push(obj);

// average data

// airplane
// https://www.withouthotair.com/c5/page_36.shtml
// average 1750 kwh per fly for

// 73 kWh per 100 p-km.

// 3277700000 kwh to twh = 3.27
// 100,000 trips

console.log(jsonOutput);
