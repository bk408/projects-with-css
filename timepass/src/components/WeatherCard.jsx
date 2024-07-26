/* eslint-disable react/prop-types */


const WeatherCard = ({ weatherData }) => {
    return (
      <div className="card-container">
        <h2>Realtime Weather</h2>
        <div className="card-details">
          <h2> {weatherData.location.name} </h2>
          <h5> humidity: {weatherData.data.values.humidity} </h5>
          <h5> rainIntensity: {weatherData.data.values.rainIntensity} </h5>
          <h5> temperature: {weatherData.data.values.temperature} </h5>
          <h5> uvIndex: {weatherData.data.values.uvIndex} </h5>
          <h5> visibility: {weatherData.data.values.visibility} </h5>
          <h5> windDirection: {weatherData.data.values.windDirection} </h5>
          <h5> windGust: {weatherData.data.values.windGust} </h5>
          <h5> windSpeed: {weatherData.data.values.windSpeed} </h5>
        </div>
      </div>
    );
};

export default WeatherCard