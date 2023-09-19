import './App.css';
import { useEffect, useState } from 'react'
function App() {
  const name = "Bangkok"
  const apiKey = "3a742b19c8af7bb65b7f7b4f91d6ab8e"
  const [city,setCity] = useState({})
  const [isLoading,setIsLoading] = useState(false)

  useEffect(()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setCity(data)
      setIsLoading(true)
    })
  },[name])

  const convertTemp=(k)=>{
    return (k-273).toFixed()
  }

  return (
    (isLoading && 
      <div className="App">
        <section>
            <div className='location'>
              <h1 className='city'>{city.name}</h1>
              <p className='state'>{city.sys.country}</p>
            </div>
            <div className='card'>
                <div className='weather'>
                  <h1>{convertTemp(city.main.temp)} &deg;C</h1>
                  <small>max:{convertTemp(city.main.temp)}&deg;C, min:{convertTemp(city.main.temp_min)}&deg;C</small>
                </div>
                <div className='info'>
                  <div className='status'>{city.weather[0].main}</div>
                  <div className='humidity'>ความชื้น = {city.main.humidity}</div>
                  <div className='wind'>ความเร็วลม = {city.wind.speed}</div>
                </div>
            </div>
        </section>
    </div>)
  );
}

export default App;
