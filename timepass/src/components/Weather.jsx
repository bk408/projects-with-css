import axios from "axios";
import { useState } from "react";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forcastData, setForCastData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await axios(
        `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=MsASEASim2M2A8McfVHWJpqAmfoI0tnd`
      );
      setWeatherData(response.data);
      setError("");
    } catch (error) {
      setError("Please enter city name");
      setWeatherData(null);
    }
  };

  const fetchForcast = async () => {
    try {
      const response = await axios(
        `https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=MsASEASim2M2A8McfVHWJpqAmfoI0tnd`
      );
      setForCastData(response.data.timelines.minutely);
      setError("");
    } catch (error) {
      setError("Please enter city name");
      setForCastData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeather();
      fetchForcast();
    } else {
      setError("City name can not be empty");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <WeatherCard weatherData={weatherData} />
        </div>
      )}
      {forcastData && (
        <div>
          <Forecast forcastData={forcastData} />
        </div>
      )}
    </div>
  );
};

export default Weather;
