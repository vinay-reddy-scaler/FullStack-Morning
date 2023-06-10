let circle_radius_list =[3,4,5,7,1,2,9,4]

function circumference(r){
    return 2*Math.PI*r;
}
function area(r){
    return Math.round(Math.PI*r*r);
}

let area_list =circle_radius_list.map(area);
console.log(area_list)

let circumference_list =circle_radius_list.map(circumference)
console.log("circumeference_list",circumference_list)