
function main() {
	setTimeout(function(){
		console.log("Here is the timeout");}, 0);
	for(var i = 0; i < 20; i++){
		console.log(i)
	}
}

main()
