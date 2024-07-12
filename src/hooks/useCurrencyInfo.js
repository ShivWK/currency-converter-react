import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    //we have given it an empty object so that if none data is returned then in that our app will not crase because in parent component we are looping over this state var data if dont have any think we may face an error.
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)     
        //data will be returned in string format we need to convert that into json object by using .json() ot JSON.parse() method 
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        // console.log(data);
    }, [currency])
    // console.log(data);
    return data
}

export default useCurrencyInfo;

//when your file is returnig pure js then use extension js otherwise use jsx if you are returning jsx