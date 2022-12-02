import './App.css';
import {useState, useEffect} from "react";
import Header from "./components/Header";
import products from "./products.json"
import Product from "./components/Product";
import Basket from "./components/Basket";

function App() {
  const [money, setMoney]  = useState(10)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const t = basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0)
    setTotal(t)
  }, [basket])

  const resetBasket = () => {
    setBasket([])
  }
  return (
    <>
      <Header total={total} money={money}/>
      {
        products.map(product => {
          return <Product total={total} money={money} key={product.id} product={product} basket={basket} setBasket={setBasket} />
        })
      }
      {
        total > 0 && (
              <Basket total={total} products={products} basket={basket} />
          )
      }

      <button onClick={resetBasket}>Sepeti Sıfırla</button>
    </>

  );
}

export default App;
