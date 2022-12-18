
import axios from "axios"
import { useEffect, useState } from "react"
import "../app/App.css"
import Weather from "../Components/Weather"

function App() {
    const [ubication, setUbication] = useState()
    const [weather, setWeather] = useState()
    const [temp, setTemp] = useState()

    const geo = position => { 
        setUbication(
            {
            latitud: position.coords.latitude,
            longitud: position.coords.longitude }
        )
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(geo)
    }, [])

    useEffect(() => {
        if(ubication){
            const apikey = "917e91b2a6093f565c59a031890717b4"
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ubication.latitud}&lon=${ubication.longitud}&appid=${apikey}`
            axios.get(url)
                .then(res => {
                    setWeather(res.data)
                    const celsius = (res.data.main.temp - 273.15).toFixed(1)
                    const farenheit = (celsius * (9/5) + 32).toFixed(1)
                    setTemp({celsius, farenheit})
                })
                .catch(err => console.log(err))
        }
    }, [ubication])

    return (
        <div className="app">
            <Weather 
                clima={weather} 
                temp={temp}
            />
                
        </div>
    )
}

export default App