let list = [1,2,3,4,5];

//find sum of array
list.push(6);
list.push(8);
list.pop()

let sum= list.reduce(function(variable,elem){
variable=variable+elem;
return variable;
})
console.log(sum);

//reduce will reduce the array to single value.