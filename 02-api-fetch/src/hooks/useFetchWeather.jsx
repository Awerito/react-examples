import { useState, useEffect } from 'react';

const useFetchWeather = (code) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!code) return;

    setIsLoading(true);
    setError(null);

    fetch(`https://api.boostr.cl/weather/${code}.json`)
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, [code]);

  return { data, isLoading, error };
};

export default useFetchWeather;
