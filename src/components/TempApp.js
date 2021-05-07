import './style.css';

import  { useState , useEffect } from 'react';

import Header from './header.js';

function TempApp(){
    
    var [date,setDate] = useState(new Date());
    var [city,setCity] = useState(null);
    var [weather,setWeather]=useState("no-wetaher-update");
    var [speed,setSpeed]=useState(null);
    const [search,setSearch]=useState("Mumbai");
    
    
    var [date,setDate] = useState(new Date());
    


    useEffect(()=>{
        
        const fetchApi= async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e2efcb23ef8a0f85585a16224fea89d9`;
            const response=await fetch(url);
            const resjson=await response.json();
            console.log(resjson);
            var tempweather;
            if(resjson.message==null){
tempweather=resjson.weather[0];
setWeather(tempweather);
setSpeed(resjson.wind);
            }      

            setCity(resjson.main);
                  }
        
        fetchApi();
    },[search])
return (

    <div>
    <div id="container">
        <div id="header">

        <h1>    Weather App</h1>
            <input type="text" className="form-control" data-toggle="tooltip" title="enter the city name" placeholder="type city name" onChange={(e)=>{setSearch(e.target.value)} } id="input"/>
        <Header/>
        
            <hr></hr>
        </div>
    </div>




    <div className="container">

    {!city ?(
<p id="info"> no data found</p>
    ) :(
        <div>
        <div className="row">



        <div className="col-md-6 col-sm-12 col-xs-12" id="container3">
            <p>city-name</p>
                     <h2>{search} </h2>


                     
<br></br>
<br></br>
<table className="table">
    <tbody>
      <tr>
        <td>feels-like</td>
        <td>Humidity</td>
              </tr>
      <tr>
        <td>{city.feels_like}℃</td>
        <td>{city.humidity}%</td>
        </tr>
    </tbody>
  </table>
  
            </div>
            



            <div className="col-md-6 col-sm-12 col-xs-12" id="container2">
            <p> Temperature and Weather</p>
                        <h2 data-toggle="tooltip" title="current weather and temp">  {city.temp}℃ & {weather.main}
</h2>
            
            

<br></br>
<br></br>
<table className="table">
    <tbody>
      <tr>
        <td>Minimum-Temperature</td>
        <td>Maximum-Temperature</td>
              </tr>
      <tr>
        <td>{city.temp_min}℃</td>
        <td>{city.temp_max}℃</td>
        </tr>
    </tbody>
  </table>
  
            
            </div>

        </div>
        <hr></hr>

        <div className="row">


        <div className="col-md-6 col-sm-12 col-xs-12" id="container2">
            
                        <h2 data-toggle="tooltip" title="current weather and temp">  Wind 🌬️
</h2>
            
            

<br></br>
<br></br>

<table className="table">
    <tbody>
      <tr>
        <td>Wind-speed</td>
        <td>Degree</td>
              </tr>
      <tr>
        <td>{speed.speed} km/h</td>
        <td>{speed.deg}°</td>
        </tr>
    </tbody>
  </table>
  <hr></hr>
            
            </div>

        
        <hr></hr>

        <div className="col-md-6 col-sm-12 col-xs-12" id="container2">
            
                        <h2 data-toggle="tooltip" title="current weather and temp">  Current-Weather
</h2>
            
            

<br></br>
<br></br>
<table className="table">
    <tbody>
      <tr>
        <td>weather</td>
        <td>description</td>
              </tr>
      <tr>
        <td>{weather.main} </td>
        <td>{weather.description}</td>
        </tr>
    </tbody>
  </table>
  
           <hr></hr> 
            </div>

        
        <hr></hr>



</div>


    </div>

    )
    }
    </div>
</div>

)

}




export default TempApp;


//api.openweathermap.org/data/2.5/weather?q={city name}&appid=3a5477a6b78a6de18f8ce98cc4ce7a0e
