# LocalStorage
JS Library for localStorage manipulation

## What is this?
This is a javascript library for the local storage object manipulation. This library is intended to be used in high fidelity prototype development, or just for simple project development. 
For those who don't know the localStorage javascript object, basically it stores ( key, value ) pairs. Ideal for storing information on the clients browser.

## Usage
To use this library you need to import it then instantiate the class, just like this:

```javascript
var ls = new LocalStorage();
```
The following methods are available for the LocalStorage object:

- check_support_localStorage() - Checks for localStorage support
- itemExists( key ) - Checks if the key exists
- set_item( key, value ) - Sets an item with a designated value
- get_item( key ) - Gets an item value giving its key
- delete_item( key ) - Deletes an item giving its key
- clear_storage() - This function will delete all storage area ( all key, value pairs )
- storage_size() - Returns the size of the storage area (how many pairs are stored), false if none
- get_key_by_index( index ) - Returns the item in an determined index, false if none

Using the already created ls var:

```javascript
var ls = new LocalStorage();

//checks for support
ls.check_support_localStorage();
//sets a key pair
ls.set_item( "ferrari", "red" );
//checks if the ferrari key exists
ls.itemExists( "ferrari" );
//Gets "ferrari value"
ls.get_item( "ferrari" );
//deletes the ferrari key pair
ls.delete_item( "ferrari" );
```

Hope you enjoy it.