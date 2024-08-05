function outest(b){
function outer() {
    let a = 10;
    function inner(){
        console.log(a,b)
    }
    return inner
}
return outer
}
var a = 100
outest("hello")()()
