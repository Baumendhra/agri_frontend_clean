import React, { useEffect, useState } from 'react';

function Weather() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/weather/")
      .then(res => res.json())
      .then(data => setWeather(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Weather Report</h2>
      {weather.map(w => (
        <div key={w.id} className="bg-white p-4 rounded shadow mb-2">
          <p><strong>Date:</strong> {w.date}</p>
          <p><strong>Condition:</strong> {w.condition}</p>
          <p><strong>Temperature:</strong> {w.temperature} °C</p>
          <p><strong>Humidity:</strong> {w.humidity}%</p>
        </div>
      ))}
    </div>
  );
}

export default Weather;

