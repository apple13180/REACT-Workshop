import CurrencyComponent from './components/CurrencyComponent';
import money from './img/money.png'
import { useEffect, useState } from 'react'

function App() {

  const [currencyChioce, setcurrencyChoice] = useState([])

  const [fromCurrency, setFormCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("THB")

  const [amount, setAmount] = useState(1)
  const [exchangeRate, setExchangeRate] = useState(0)

  const [checkFromCurrency, setCheckFromCurrency] = useState(true)

  let fromAmount, toAmount

  if(checkFromCurrency){
    fromAmount = amount
    toAmount = (amount*exchangeRate).toFixed(2)
  } else {
    toAmount = amount
    fromAmount = (amount/exchangeRate).toFixed(2)
  }
 
  useEffect(()=>{
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setcurrencyChoice([...Object.keys(data.rates)])
      setExchangeRate(data.rates[toCurrency])
    })
  }, [fromCurrency, toCurrency])

  const amountFromCurrency=(e)=>{
        setAmount(e.target.value)
        setCheckFromCurrency(true)
  }

  const amountToCurrency=(e)=>{
        setAmount(e.target.value)
        setCheckFromCurrency(false)
  }

  return (
    <div>
      <img src={money} alt="logo" className="money-img"/>
      <h1>แอพแปลงสกุลเงิน (API)</h1>
      <div className="container">
        <CurrencyComponent 
        currencyChioce={currencyChioce} 
        selectCurrency={fromCurrency}
        changeCurrency={(e)=>setFormCurrency(e.target.value)}
        amount = {fromAmount}
        onChangeAmount={amountFromCurrency}
        />
        <div className="equal"> = </div>
        <CurrencyComponent 
        currencyChioce={currencyChioce} 
        selectCurrency={toCurrency}
        changeCurrency={(e)=>setToCurrency(e.target.value)}
        amount = {toAmount}
        onChangeAmount={amountToCurrency}
        />
      </div>
    </div>
  );
}

export default App;
