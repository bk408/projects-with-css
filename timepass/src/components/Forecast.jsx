/* eslint-disable react/prop-types */

const Forecast = ({ forcastData }) => {
  return (
    <div className="card-container">
      <h2>Realtime Weather</h2>
      <div className="card-details">
        <h2> {forcastData.location.name} </h2>
        <h5> humidity: {forcastData.data.values.humidity} </h5>
        <h5> rainIntensity: {forcastData.data.values.rainIntensity} </h5>
        <h5> temperature: {forcastData.data.values.temperature} </h5>
        <h5> uvIndex: {forcastData.data.values.uvIndex} </h5>
        <h5> visibility: {forcastData.data.values.visibility} </h5>
        <h5> windDirection: {forcastData.data.values.windDirection} </h5>
        <h5> windGust: {forcastData.data.values.windGust} </h5>
        <h5> windSpeed: {forcastData.data.values.windSpeed} </h5>
      </div>
    </div>
  );
};

export default Forecast;
