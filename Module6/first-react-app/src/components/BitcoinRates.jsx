import { useEffect, useState } from "react";
import { useData } from "./UseData";


const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {

const [currency, setCurrency] = useState(currencies[0]);
const [bitcoinRate, setBitcoinRate] = useState(null);
const data=useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
// useEffect(() => {


// fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)

// .then(response => response.json())
// .then(json => {
//     console.log (json.bitcoin[currency.toLowerCase()])
// setBitcoinRate (json.bitcoin[currency.toLowerCase()])
// //setBitcoin(json.setBitcoin);
// });

// }, [currency]);


return (

// return () => {
// ignore = true; 
// console.log('cleanup effect');
// };
// }, [currency]); // effect dependencies


// // hooks are usually named exports rather than default
// export function useData(url) {
// // state variable for holding fetched json data
// const [data, setData] = useState(null);
// useEffect(() => {
// if (url) {
// let ignore = false;
// fetch(url)
// .then(response => response.json())
// .then(json => {
// if (!ignore) {
// setData(json);
// }
// });
// // cleanup function, in case url changes before complete
// return () => {
// ignore = true;
// };
// }
// }, [url]); // re-run effect if url changes
// // return the data fetched from the given url
// return data;
// }
// // save as useData.jsx in the 'hooks' folder





    

// function ActivityFinder() { // Fetches a random activity

// const [participants, setParticipants] = useState(1);

// const [activity, setActivity] = useState('');

// useEffect(() => {
// fetch('https://bored.api.lewagon.com/api/activity?' + 'participants=' + participants)

// .then(response => response.json())
// .then(json => {
// setActivity(json.activity);
// });
// }, [participants]);
// return (

<div className="BitcoinRates componentBox">
<h3>Bitcoin Exchange Rate</h3>
<label>Choose currency:
<select value={currency} onChange={e => setCurrency(e.target.value)}>
{currencies.map(currency => (
    <option 
    key={currency} value={currency}>{currency}
    </option>
))}
</select>
</label>
<div>
Result: {data?.bitcoin[currency.toLowerCase()]}
</div>
</div>
)
}




export default BitcoinRates