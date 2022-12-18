import { useState } from "react"

function Weather({clima, temp}) {
    const [celsius, setCelsius] = useState(true)
    const handleClick = () => setCelsius(!celsius) 

    return (
        <main className="card">

            <header className="card__header">
                <h1 className="card__title"> Weather App </h1>
                <h3 className="card__subtitle"> {clima?.name}, {clima?.sys.country} </h3>
            </header>

            <article className="card__icon--container">
                <img className="card__icon" src= {clima && `http://openweathermap.org/img/wn/${clima.weather[0].icon}@4x.png`} />
            </article>

            
            <aside className="card__info">
                <h3 className="card__description"> "{clima?.weather[0].description}" </h3>

                <ul className="card__list">
                    <li className="card__item" >   
                        <span className="card__span"> Wind Speed: </span> {clima?.wind.speed} m/s 
                    </li>
                    <li className="card__item" >   
                        <span className="card__span"> Clouds: </span> {clima?.clouds.all} % 
                    </li>
                    <li className="card__item" >   
                        <span className="card__span"> Pressure: </span> {clima?.main.pressure} hPa
                    </li>
                </ul>
            </aside>

            <footer className="card__footer">
                <h3 className="card__temp">  {
                    celsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F` 
                } </h3>
                <button onClick={handleClick} className="btn__card"> converter to {celsius ? "°F" : "°C"} </button>
            </footer>

        </main>
    )
}

export default Weather