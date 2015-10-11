function check_support_indexedDB(){
	if("indexedDB" in window) {
			return true;
		} else {
			return false;
		}
}

/*
The basic pattern that IndexedDB encourages is the following:

Open a database.
Create an object store in the database. 
Start a transaction and make a request to do some database operation, like adding or retrieving data.
Wait for the operation to complete by listening to the right kind of DOM event.
Do something with the results (which can be found on the request object).

With this in mind, let's try to create methods for this workflow.
*/

//https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

/**
 * Opens a database - Creates/Updates a database
 * @param dbName Database name
 * @param dbVersion Database version
 */

 function openDatabase( dbName, dbVersion ){

 	var db;

 	if( check_support_indexedDB() ){
 		var request = window.indexedDB.open( dbName, dbVersion);

 		//Add success and error handlers
 		request.onerror = function(event) {
		  console.log( "An error as occured" );
		  return false;
		};
		request.onsuccess = function(event) {
		  db = event.target.result;
		};

 	}else{
 		return false;
 	}
 }

 /**
 * Creates a table
 * @param dbName Database name
 * @param dbVersion Database version
 * @param tableName Name of the table to create
 * @param pKey Key to the database
 */

 /*function createTable( dbName, dbVersion, tableName, pKey ){

 	var db = openDatabase( dbName, dbVersion );
 	var objectStore = db.createObjectStore( tableName, { keyPath: pKey });

 }*/