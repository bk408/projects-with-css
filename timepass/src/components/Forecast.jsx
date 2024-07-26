/* eslint-disable react/prop-types */

const Forecast = ({ forcastData }) => {
  return (
    <div>
      <h2>Forcast Report</h2>
      <h5> {forcastData.time.values.cloudBase} </h5>
    </div>
  );
};

export default Forecast;
