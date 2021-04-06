// var a='patna';

// var a='patna';
var inp=document.querySelector('input')
inp.addEventListener("keypress",function(s){
    if(s.key==="Enter"){
         a=inp.value;
         const url=`http://api.openweathermap.org/data/2.5/weather?q=${a}&appid=fcb05ce2d156c68ff4c4703fe64dff15&units=metric`;

fetch(url)
.then(function(data){
    return data.json()
})
.then(function(response){
    // console.log(response)
    // console.log(response.name)
    // console.log(response.sys.country)
    // console.log(response.main.temp_min)
    // console.log(response.main.temp_max)
    // console.log(response.weather[0].main)
    document.querySelector('#city').innerHTML=response.name;
    // document.querySelector('#country').innerHTML=response.sys.country;
    document.querySelector('#temp').innerHTML=response.main.temp+"&#8451";
    document.querySelector('#s').innerHTML=response.weather[0].main;
    document.querySelector('#min').innerHTML=response.main.temp_min+"&#8451"+"/";
    document.querySelector('#max').innerHTML=response.main.temp_max+"&#8451";
    inp.value=""

})
.catch(function(err)
{
    console.log("")
})

    }
})
