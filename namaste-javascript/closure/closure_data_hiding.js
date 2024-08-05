function counter() {
	 var count = 0;
	return function incrementCount(){
		count++;
		console.log(count);	
	}
}
var counter1 = counter();
counter1()
counter1()
