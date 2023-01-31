const newItem = async (event) => {

  event.preventDefault();

  // collect values from the item management form
  const category = document.querySelector('#category-type').value.trim();
  // const section = document.querySelector('#category-type').value.trim();
 
  const product = document.querySelector('#product-name').value.trim();
  const quantity = document.querySelector('#replyNumber').value.trim();
  const price = document.querySelector('#product-price').value.trim();
  const par_min = document.querySelector('#product-par').value.trim();

  // data validation 
  if (quantity < 0){
    alert("Invalid quantity input, please try again");
  } else if (price < 0){
    alert("Invalid price input, please try again");
  } else if (par_min <= 0) {
    alert("Invalid par min input, please try again");
  }

  // register new product
  if (category && product && quantity >= 0 && price >= 0 && par_min > 0) {

    // send a POST request to the API endpoint
    const response = await fetch('/api/itemManagement', {
      method: 'POST',
      body: JSON.stringify({ category, product, quantity, price, par_min }),
      headers: { 
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // if successful, redirect the browser to the profile page
      document.location.replace('/api/inventory');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('#add-item')
  .addEventListener('click', newItem);