module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  
  choose_image: (categoryName) => {
    if(categoryName === "Whiskey"){
      return `<img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
      class="w-100" />`
    }
    else if (categoryName === "Vodka"){
      return `<img src="https://media.istockphoto.com/id/1289215387/photo/austin-congress-street-bridge-and-texas-capitol-building.jpg?s=612x612&w=0&k=20&c=y4l2u5CyDboGa0IJa3OPpcMIL5oOD_caaPbh4Sd9nsE="
      class="w-100" />`
    }
  }
};
  
