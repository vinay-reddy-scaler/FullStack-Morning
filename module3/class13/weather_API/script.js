
let form = document.querySelector("nav form")
let temperatureField =document.querySelector(".temp")
let dateTimeField =document.querySelector(".time_location span")
let locationFiled =document.querySelector(".time_location p")
let conditionImgField =document.querySelector(".weather_condition img")
let conditionField =document.querySelector(".weather_condition span")
let searchField = document.querySelector(".searchField");
let target='london'
let dayarr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
async function fetchdata(target){
    try{
    let url=`https://api.weatherapi.com/v1/current.json?key=5d1cac37d81d4c3fa9d20726230606&q=${target}&aqi=no`
    let response= await fetch(url)
    let data=await response.json()
    console.log(data)
    let name =data.location.name
    let temp=data.current.temp_c
    let local_time=data.location.localtime
    let condtion_text=data.current.condition.text
    let condtion_img=data.current.condition.icon
    console.log(name,temp,local_time,condtion_text,condtion_img)
    updateDOM(name,temp,local_time,condtion_text,condtion_img)
}
    catch(error){
        alert("please select validate location")}
}
fetchdata(target)
function updateDOM(name,temp,local_time,condtion_text,condtion_img){
    let arr=local_time.split(" ")
    console.log("list",arr)
    let date=arr[0]
    let time =arr[1]
    let dayNumber= new Date(date).getDay()
    let dayName=dayarr[dayNumber];
    dateTimeField.innerText=`${time} ${dayName} ${date}`
    temperatureField.innerText = temp
    locationFiled.innerText=name
    conditionField.innerText=condtion_text
    conditionImgField.src=condtion_img
}
form.addEventListener("submit", function(event){
    event.preventDefault()
    console.log(event)
    target=searchField.value   
    fetchdata(target)
})