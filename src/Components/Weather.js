import axios from 'axios'
import React, { useState } from 'react'

function Weather() {
    const[input,setInput]=useState("")
    const apikey = "f940aa7ea922aa95837964abba1dd542"
    const [data,setData]=useState({})
    const getWeather =(cityName)=>{
        const url ="https://api.openweathermap.org/data/2.5/weather?q=" +cityName + "&appid="+ apikey
        axios.get(url)
        .then((res)=>{
            console.log("response",res.data)
            setData(res.data)
        }).catch((err)=>{
console.log("err",err)
        })
    }
  const inputChange =(e)=>{
      console.log("value",e.value)
  setInput(e.target.value)
  }
    const searchBar=()=>{
        getWeather(input)
    }
   
    return (

    <div className='col-md-12 first'>
<div className='weatherBg'>
 <h1>Weather App</h1>
 <div className='d-grid gap-3 col-4 mt-4 forcast' >
<input type='text' className='form-control ' placeholder='enter city name'
 onChange={inputChange} value={input} />
<button className='btn btn-primary' type='button' onClick={searchBar} >search</button>
 </div>
  </div>
  {Object.keys(data).length>0 &&
  <div className='col-md-12 text-center mt-5'>
      <div className='weatherResult'>
   <img className='weather-icon'
   src='https://uxwing.com/wp-content/themes/uxwing/download/27-weather/weather.png' />
     <h5>{data.name}</h5>
    <h6>{((data.main.temp)-273.15).toFixed(2)}°C</h6>
    <h4>Humidity : {data.main.humidity}%, pressure : {data.main.pressure}hPa</h4>  
    <h3>Visiblity:{data.visibility}meter</h3>
      </div>
  </div>}
</div>

  )
}

export default Weather