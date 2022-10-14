window.onload=function(){
  
  const sy_date = getElement("sy-date");
  const sy_temp=getElement("sy-temp");
  const sy_des=getElement("sy_description");
  const sy_icon=getElement("sy_icon");
  const sy_humidity=getElement("sy_humidity");
  const sy_wind=getElement("sy_wind");

  const se_date = getElement("se-date");
  const se_temp=getElement("se-temp");
  const se_des=getElement("se_description");
  const se_icon=getElement("se_icon");
  const se_humidity=getElement("se_humidity");
  const se_wind=getElement("se_wind");
  

  //set the date
  sy_date.innerHTML=calcTime("Shenyang","+8");
  se_date.innerHTML=calcTime("Stockholm","+2");

  // get the time of different cities
  function calcTime(city,offset){
    d=new Date();
    utc=d.getTime() + (d.getTimezoneOffset() * 60000);
    nd=new Date(utc + (3600000 * offset));
    
    return nd.toLocaleString("en-US",{weekday: "long", month: "long", day: "numeric",hour:"numeric",minute:"numeric"});
  }


  // get element by id
  function getElement(id){
    return document.getElementById(id);
  }
  
  // obtain open weather data
  async function getWeather(){

    const apiKey="09190d221b335fa32bf58a08a1f6dadd";
    
    const sy_weather=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=shenyang&appid=${apiKey}&units=metric`)
    .then(response=>{return response.json()})
    .then(function(res){
      
      return res; 

    })
    .catch(err=>console.log("something is wrong"))

    sy_temp.innerHTML=sy_weather.main.temp+" °C";
    sy_des.innerHTML=sy_weather.weather[0].description;
    
    sy_wind.innerHTML="wind speed: "+ sy_weather.wind.speed;

    const se_weather=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=${apiKey}&units=metric`)
    .then(response=>{return response.json()})
    .then(function(res){
      return res; 
    })
    .catch(err=>console.log("something is wrong"))

    se_temp.innerHTML=se_weather.main.temp+" °C";
    se_des.innerHTML=se_weather.weather[0].description;
    se_wind.innerHTML="wind speed: "+ se_weather.wind.speed;

    // return sy_weather,se_weather;
    
   
  }

  getWeather();



}

