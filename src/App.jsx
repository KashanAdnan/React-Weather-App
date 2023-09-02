import React, { useState } from 'react'
import Card from './components/Card/Card'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import "./App.css"
import Navbar from './components/Navbar/Navbar'

function App() {
  const [search, setSearch] = useState("")
  const [wether, setWeather] = useState([])

  const getWeatherData = (e) => {
    e.preventDefault()
    axios.get(
      `https://api.weatherapi.com/v1/current.json?key=9cab70a6bd814438adc43614233108&q=${search}&aqi=no`
    ).then((res) => {
      const weatherAray = [...wether];
      weatherAray.push(res)
      weatherAray.reverse()
      setWeather(weatherAray)
      setSearch("")
    }).catch((err) => {
      toast.error('City Not Found!')
    })
  }
  return (
    <div className="main-container">
      <Navbar click={getWeatherData} state={setSearch} val={search} />
      <div className="weather-container">
        <form style={{ display: `${wether.length === 0 ? "flex" : "none"}` }} onSubmit={(e) => getWeatherData(e)} className="search-city">
          <span>🚀 </span>
          <input onChange={(e) => setSearch(e.target.value)} value={search} placeholder={wether.length === 0 ? `Search City...` : ""} />
          <span> 🚀</span>
        </form>
        {
          wether.reverse().map((item, index) => {
            return <Card key={index} item={item} />
          })
        }
      </div>
<Toaster />
    </div>
  )
}

export default App
