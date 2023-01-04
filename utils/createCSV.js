const { Parser } = require('json2csv');

const createCSV = (data) => {

  const json2csvParser = new Parser();
  const csv = json2csvParser.parse(data);

}




module.exports = createCSV;