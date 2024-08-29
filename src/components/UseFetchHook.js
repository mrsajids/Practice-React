import { useState, useCallback, useEffect } from 'react';

function UseFetchHook(url, nn) {
    const [data1, setData] = useState(null);
    const [error1, setError] = useState(null);
    const [loading1, setLoading] = useState(false);
    const [options, setOptions] = useState({

    })
    const [mm, setMM] = useState(null)

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            setError(null);
            fetch(url)
                .then(response => {
                    const result = response.json()
                    setData(result);
                })
                .then(json => console.log(json))
        }
        fetchData();
        console.log('running fetch callback');

    }, []);

    return { data1, error1, loading1 };
}

export default UseFetchHook;
