import { useState, useCallback } from 'react';

function UsePostHook(url, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    fetch(url)
      .then(response => {
        const result = response.json()
        setData(result);
      })
      .then(json => console.log(json))

    // try {
    //   const response = await fet(url, options);
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
    //   const result = await response.json();
    //   setData(result);
    // } catch (error) {
    //   setError(error);
    // } finally {
    //   setLoading(false);
    // }
    console.log('running callback');
    
  }, [url, options]);

  return { data, error, loading, fetchData };
}

export default UsePostHook;
