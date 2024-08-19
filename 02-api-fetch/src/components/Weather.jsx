import { useEffect, useState } from 'react';

const Weather = ({ code }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    fetch(`https://api.boostr.cl/weather/${code}.json`)
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false))
  }, [code]);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Ha ocurrido un error: {error.message}</p>
  }

  return (
    <>
      {data && (
        <div>
          <h2>Clima en {data.city}</h2>
          <p>Temperatura: {data.temperature}°C</p>
          <p>Condición: {data.condition}</p>
          <p>Humedad: {data.humidity}%</p>
          <p>Última actualización: {data.updated_at}</p>
        </div>
      )}
    </>
  );
};

export default Weather
