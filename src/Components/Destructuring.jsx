import Practice from "./Practice";


const Destructuring = () => {
    const api = {
        data: [
          { name: "Bitcoin", price: "20", symbol: { n1: "BTC", n2: "B" } },
          { name: "Ethereum", price: "10", symbol: { n1: "ETH", n2: "E" } },
          { name: "Tether", price: "19", symbol: { n1: "USDT", n2: "U" } },
        ],
        timestamp: 2,
      }; 
const {data} = api;

const cars = ["Volvo", "Saab", "BMW"];
const addCars = [...cars, "Benz"];

const names = ["Ammy", "Naddy", "Lateef"];
const names2 = ["Ammy1", "Naddy2", "Lateef3"];
const person = { name: "Nadra", age: 2, height: 1.76};

const {name, age} = person;

const modNam = [...names, ...names2, "Ruk"];

    return (
        <>
      <p>{data.map((coin) => (<Practice coin={coin} />))}</p> 
      {addCars.map((ca) => (<p>{ca}/</p>))}
      <p>{name}</p>
      <p>{age}</p>
      {modNam.map((n) => (<p>{n}</p>))} 
        </>
    )
} 
export default Destructuring;