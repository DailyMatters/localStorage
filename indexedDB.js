function check_support_indexedDB(){
	if("indexedDB" in window) {
			return true;
		} else {
			return false;
		}
}
