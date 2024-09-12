import useFetchWeather from '../hooks/useFetchWeather';

const Weather = ({ code }) => {
  const { data, isLoading, error } = useFetchWeather(code);


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
