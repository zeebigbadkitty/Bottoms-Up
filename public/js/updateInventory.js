// update inventory function
const updateInventory = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute('data-id')) {

    // collect data from user input
    const id = event.target.getAttribute('data-id');
    const quantity = document.getElementById(id).value;

    if (quantity >= 0){
      const response = await fetch(`/api/inventory/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: id,
          quantity: quantity,
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
    };
        
    if (quantity < 0){
      alert("Invalid quantity input, please try again");
    };
  }
};

// delete inventory function
const deleteInventory = async (event) => {

  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/inventory/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/api/inventory');
    } else {
      alert('Failed to delete inventory data');
    }
  }
}

// event listener to differentiate delete and update
document
  .getElementById('inventory-list')
  .addEventListener('click', (event) => {
    
    const element = event.target.nodeName;
    const action = event.target.getAttribute('id');

    if(element == 'BUTTON' && action == 'update'){
      updateInventory(event);
    };

    if(element == 'BUTTON' && action == 'delete'){
      deleteInventory(event);
    }
  });
