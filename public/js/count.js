// Get data from count page
const state = document.getElementById('state').getAttribute('data-state').split(',');
const display = document.getElementsByClassName('status');

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

if (state.length>0) {
  checkProductStatus();
}

