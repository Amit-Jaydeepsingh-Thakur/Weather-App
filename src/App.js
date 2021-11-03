import React, { useEffect, useState } from 'react';
import Weather from './components/weather';
import './App.css';

function App() {
    const [latitude, setLatitude] = useState([]);
    const [longitude, setLongitude] = useState([]);
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {

            navigator.geolocation.getCurrentPosition(function(position) {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            });
        
            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setWeatherData(result);
                });
        }

        fetchWeatherData();
    }, [latitude, longitude]);

    return (
        <div className="App">
            {(typeof weatherData.main != 'undefined' && (typeof process.env.REACT_APP_API_URL != 'undefined' 
            || typeof process.env.REACT_APP_API_KEY != 'undefined') && weatherData.cod === 200) ?
                (<Weather weatherData = {weatherData}/>) :
                (<div></div>)
            }
        </div>
    );
}

export default App;