import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrency from "./Hooks/useCurrency";

function App() {
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo: Record<string, number> = useCurrency(from);
  const options: string[] = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convertionalCurrency = ()=>{
    
      const convertedAmount:number = amount * currencyInfo[to];
      setConvertedAmount(convertedAmount);
   
  }

  return (
    <div className="w-screen bg-teal-100 relative ">
      <form
        className="h-screen flex items-center flex-col gap-4 justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          convertionalCurrency();
        }}
      >
        <InputBox
         label="FROM"
          defaultCurreny={from}
          setOptions={options}
          amount={amount}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(amount: number) => setAmount(amount)}

        />
        <InputBox
        label="TO"
          onCurrencyChange={(currency) => setTo(currency)}
          amount={convertedAmount}
          defaultCurreny={to}
          setOptions={options}
          onAmountChange={(amount:number) => setConvertedAmount(amount)}
        />
        <button
          onClick={swap}
          className=" px-10 py-4 bg-blue-400 rounded-md text-white font-bold w-[40%]"
        >
          SWAP
        </button>

        <button className=" px-10 py-4 bg-blue-400 rounded-md text-white font-bold w-[40%]">
          Convert
        </button>
      </form>
    </div>
  );
}

export default App;
