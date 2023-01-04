const updateInventory = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute('data-id')) {

  // Collect data from user input
  const quantity = document.querySelector('#new-quantity').value.trim();
  const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/inventory/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        inventory_id: id,
        quantity,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace('/api/inventory');
    } else {
      alert('Failed to update inventory quantity');
    }
  }
};



document
  .querySelector('.update-quantity')
  .addEventListener('click', updateInventory);

