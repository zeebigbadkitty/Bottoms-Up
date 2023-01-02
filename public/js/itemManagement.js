const newItem = async (event) => {

  event.preventDefault();

  // Collect values from the item management form

  const category = document.querySelector('#category-name').value.trim();
  const product = document.querySelector('#product-name').value.trim();
  const quantity = document.querySelector('#replyNumber').value.trim();
  const price = document.querySelector('#product-price').value.trim();
  const par_min = document.querySelector('#product-par').value.trim();

  if (category && product && quantity && price && par_min) {

    // Send a POST request to the API endpoint
    const response = await fetch('/api/itemManagement', {
      method: 'POST',
      body: JSON.stringify({ category, product, quantity, price, par_min }),
      headers: { 
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/api/inventory');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('#add-item')
  .addEventListener('click', newItem);