/* Checks for localStorage support */
function check_support() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

/* Checks if the key item exists */
function itemExists(item){
	
	if( localStorage.getItem(item) ){
		return true;
	}else{
		return false;
	}	
}