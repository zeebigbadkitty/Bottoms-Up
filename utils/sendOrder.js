const nodemailer = require('nodemailer');
const { Parser } = require('json2csv');
const QRCode = require('qrcode')
const date = new Date();
const currentDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
let url;
let complete = false;

// generate QR data url
const generateQR = async (data) => {
  try {
    url = await QRCode.toDataURL(data);
    //complete = true;
    return complete = true;
  } catch (err) {
    res.status(500).json(err);
  }
}

const sendOrder = (data) => {

  // prepare data for QR code 
  const tempData = JSON.parse(data);
  const tempString = currentDate.toString();
  const tempDataArray = [];

  for (let i=0; i<tempData.length; i++){
    tempDataArray.push(tempData[i].id,tempData[i].par_min);
  }

  const qrString = tempString.concat(",", tempDataArray.join(","));

  generateQR(qrString);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'bottomsup20221226@gmail.com',
        pass:'izbivqkiorzcnmau'
    }
  })

  const fields = [{
    label: 'Category',
    value: 'category'
  },{
    label: 'Product Name',
    value: 'product'
  },{
    label: 'Order Quantity',
    value: 'par_min'
  }];

  const csvData = JSON.parse(data);
  const json2csvParser = new Parser({ fields });
  const csv = json2csvParser.parse(csvData);

  const mail_configuration = {
    from: 'bottomsup20221226@gmail.com',
    to: 'kyle_albright@hotmail.com',
    subject:`Bottoms Up Distribution Order Request ${currentDate}`,
    attachDataUrls: true,
    html: `
    <p> 
    Dear Supplier,
    <br><br>     
    Please see attached as official order request.
    <br><br>     
    Please send the below QR Code with the shipment.
    <br>
    <img src="${url}">
    <br><br>
    Regards,
    <br><br>  
    Bottoms Up Distribution,
    <br><br>  
    </p>
    `,
    attachments: [
      {
        filename: `Order Request ${currentDate}.csv`,
        content: csv,
      },
    ],
  }

  if (complete == true){
    return new Promise((resolve, reject) => {

      transporter.sendMail(mail_configuration, function(error, info){
        if(error){
          return reject({message: 'An error has occurred'})
        }
          return resolve({message:'Email sent successfully'})
      })
    }) 
  }
}

module.exports = sendOrder;