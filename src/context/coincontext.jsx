import { createContext, useEffect, useState } from "react";

export const coincontext=createContext();

const CoinContextProvider=(props)=>{
const [allcoin,setallcoin]=useState([]);
const[currency,setcurrency]=useState({
    name:'usd',
    symbol:'$'
})

const fetchallcoin=async()=>{
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-8ShBQrkrxhv2cpVbjsWtV3Us'}
      };
      
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
        .then(response => response.json())
        .then(response => setallcoin(response))
        .catch(err => console.error(err));
}

useEffect(()=>{
    fetchallcoin();
},[currency])
    const contextvalue={
        allcoin,currency,setcurrency
    }
return (
    <coincontext.Provider value={contextvalue}>
        {props.children}
    </coincontext.Provider>
)
}
export default CoinContextProvider;