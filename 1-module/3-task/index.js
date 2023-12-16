function ucFirst(str) {
	let slicedStr = str.slice(1,str.length)
	if(str.indexOf(str.toLowerCase()) != -1) {
		return str.charAt(0).toUpperCase() + slicedStr
	} else if(!str){
		return str
	}
}
