const ctx = document.getElementById('myChart');
const category = document.getElementById('category-data').getAttribute('data-category').split(',');
const quantity = document.getElementById('quantity-data').getAttribute('data-quantity').split(',');

// generate random sales data
const max = quantity.reduce((a, b) => Math.max(a,b), -Infinity);
const sale = quantity.map(() => {
  return Math.floor(Math.random()*max)
});
 
// data set and configuration for the chart
const data = {
  labels: category,
  datasets: [{
    label: 'Current Inventory',
    data: quantity,
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'Sales in Week 2023-01-02',
    data: sale,
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

// chart configuration
new Chart(ctx, {
  type: 'radar',
  data: data,
  options: {
    responsive: true,
    elements: {
        line: {
        borderWidth: 6
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Inventory vs Sales',
          padding: {
            top: 10,
            bottom: 30
          }
        }
      }
   },
});