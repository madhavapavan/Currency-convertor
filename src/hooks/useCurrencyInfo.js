import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/26061dca0b2de1228dcd4106/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.conversion_rates))  // Assuming the rates are in `conversion_rates`
            .catch((err) => console.error("Error fetching currency data:", err));
    }, [currency]);

    console.log(data);  // This will log the currency conversion rates.
    return data;
}

export default useCurrencyInfo;
