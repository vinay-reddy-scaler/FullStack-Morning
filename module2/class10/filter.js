let arr=[1,2,3,4,5,6,76,54,21]
let filteredArr = even(arr,checkEven);
console.log(filteredArr);

function checkEven(ele){
        return ele%2 == 0;
    }
function even(arr,cb){
    let filteredArr = [];
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i])){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr
}
// shortcut for filtering from array using filter method
let filtered_arr= arr.filter(function(element){
    return element%2==0;
})
console.log(filtered_arr)