/* Checks for localStorage support */
function check_support_localStorage() {
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

/* Sets an item with a designated value */
function set_item( key, value ){

	/* ATTENTION, THIS WILL OVERRIDE */
	if( itemExists( key ) ){
		localStorage.setItem( key , value );
		console.log( key + " value has just been overriden." );
	}else{
		//will do the same but no overriding, just creating
		localStorage.setItem(key, value);
	}
}

/* Gets an item value giving its key */
function get_item( key ){

	try{
		if( itemExists( key ) ){
			return localStorage.getItem( key );
		}else{
			return false;
		}
	}catch(err){
		console.log( err );
		return false;
	}
}
/* Deletes an item given its key */
function delete_item( key ){

	try{
		if( itemExists( key ) ){
			return localStorage.removeItem( key );
		}else{
			return false;
		}
	}catch( err ){
		console.log( err );
		return false;
	}

}

/* This function will delete all storage area */
function clear_storage(){

	localStorage.clear();

}

/* Returns the size of the storage area (how many pairs are stored), false if none */
function storage_size(){

	size = localStorage.length;

	if( size === 0 ){
		return false;
	}else{
		return size;
	}

}

/* Returns the item in an index, false if none */
function get_key_by_index( index ){

	item = localStorage.key( index );

	if( item === false || item === null ){
		return false;
	}else{
		return item;
	}
}