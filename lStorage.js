/* Convert this library to support object oriented Js */
function LocalStorage(){

	/* Checks for localStorage support */
	this.check_support_localStorage = function () {
		  try {
		    return 'localStorage' in window && window['localStorage'] !== null;
		  } catch (e) {
		    return false;
		  }
	}

	/* Checks if the key item exists */
	this.itemExists = function(item){
		
		if( localStorage.getItem(item) ){
			return true;
		}else{
			return false;
		}	
	}

	/* Sets an item with a designated value */
	this.set_item = function( key, value ){

		/* ATTENTION, THIS WILL OVERRIDE */
		if( this.itemExists( key ) ){
			localStorage.setItem( key , value );
			console.log( key + " value has just been overriden." );
		}else{
			//will do the same but no overriding, just creating
			localStorage.setItem(key, value);
		}
	}

	/* Gets an item value giving its key */
	this.get_item = function( key ){

		try{
			if( this.itemExists( key ) ){
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
	this.delete_item = function( key ){

		try{
			if( this.itemExists( key ) ){
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
	this.clear_storage = function(){

		localStorage.clear();

	}

	/* Returns the size of the storage area (how many pairs are stored), false if none */
	this.storage_size = function(){

		size = localStorage.length;

		if( size === 0 ){
			return false;
		}else{
			return size;
		}

	}

	/* Returns the item in an index, false if none */
	this.get_key_by_index = function( index ){

		item = localStorage.key( index );

		if( item === false || item === null ){
			return false;
		}else{
			return item;
		}
	}

}