function hof(cb){
    console.log("I m hof")
    cb()
}
function cb(){
    console.log("i m call back function")
}
hof(cb)