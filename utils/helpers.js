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
      return `<img src="/assets/whiskey.png"
      class="w-100" />`
    }
    else if (categoryName === "Vodka"){
      return `<img src="/assets/vodka.png"
      class="w-100" />`
    }
    else if (categoryName === "Gin"){
      return `<img src="/assets/gin.png"
      class="w-100" />`
    }

    else if (categoryName === "Tequila"){
      return `<img src="/assets/tequila.png"
      class="w-100" />`
    }
    else if (categoryName === "Mezcal"){
      return `<img src="/assets/mezcal.png"
      class="w-100" />`
    }
    else if (categoryName === "Brandy"){
      return `<img src="/assets/brandy.png"
      class="w-100" />`
    }
    else if (categoryName === "Rum"){
      return `<img src="/assets/rum.png"
      class="w-100" />`
    }
    else if (categoryName === "Scotch"){
      return `<img src="/assets/scotch.png"
      class="w-100" />`
    }
  }
};
  
