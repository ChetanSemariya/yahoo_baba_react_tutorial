import { useEffect, useState } from "react";

function useFetch(url) {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log("Error fetching data:", error));
    }, [url]);

    return data;
}

export default useFetch;