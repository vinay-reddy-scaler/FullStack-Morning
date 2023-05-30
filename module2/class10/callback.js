function hof(cb){
    console.log("I m hof")
    cb()
}
function cb(){
    console.log("i m cd")
}
hof(cb)