import { useEffect, useRef, useState } from "react";

const useCurrency=(currency)=>{

    const [data, setData] = useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`).then((response)=>response.json()).then((response)=>setData(response[currency]));

    }, [currency]);

    return data;
}

export default useCurrency;