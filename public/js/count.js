// Get data from count page
const state = document.getElementById('state').getAttribute('data-state').split(',');
const display = document.getElementsByClassName('status');
const orderData = document.getElementById('order-data').getAttribute('data-orderData');
const btnDownloadCsv = document.getElementById("btnDownloadCsv");
const date = new Date();
const currentDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
const csvData = JSON.parse(orderData);

// for loop to check inventory status
// state === 2 => inventory status is above par
// state === 1 => inventory status is on par
// state === 0 => inventory status is below par
const checkProductStatus = () => {

  for (let i=0; i<state.length; i++){
    if(state[i] == 2){
      display[i].classList.add("above");
    } 
    else if(state[i] == 1){
      display[i].classList.add("on");
    } 
    else {
      display[i].classList.add("below");
    }
  }
}

// download csv function
const downloadCsv = (filename, csvData) => {
  const element = document.createElement("a");

  element.setAttribute("href", `data:text/csv;charset=utf-8,${csvData}`);
  element.setAttribute("download", filename);
  element.style.display = "none";

  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

if (state.length>0) {
  checkProductStatus();
}

// event listener to download the file
btnDownloadCsv.addEventListener("click", () => {
  downloadCsv(`Product Order Request ${currentDate}.csv`, json2csv.parse(csvData));
});