import React, { useState } from 'react';
import UsePostHook from './UsePostHook'; // Adjust the path according to your file structure
import UseFetchHook from './UseFetchHook';

function UsePostHookComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [count,setCount]=useState(1);

  const {fetchData} = UsePostHook('https://jsonplaceholder.typicode.com/todos/2');
  const {data1, error1, loading1} = UseFetchHook(`https://jsonplaceholder.typicode.com/todos/${count}`,{
    count:`1`,
  });

  const handleFetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchData();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleFetchData} disabled={loading}>
        {loading1 ? 'Loading...' : 'Fetch Data'}
      </button>
      
      {error1 && <p>Error: {error.message}</p>}
      {data1 && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      <button onClick={()=>setCount(pc=>pc+1)}>+++</button>
    </div>
  );
}

export default UsePostHookComponent;
