function InputBox({
  setOptions,
  defaultCurreny,
  amount,
  onCurrencyChange,
  onAmountChange,
  label,
}: {
  setOptions: string[];
  defaultCurreny: string;
  amount: number;
  onCurrencyChange: (currency: string) => any;
  onAmountChange: (amount:number) => number;
  label:string;
}) {
  return (
    <div className="w-[40%] h-[15vh] border-2 border-teal-950 rounded-lg bg-teal-200 px-5 py-3">
      <div className="h-[40%] flex justify-between items-center w-full">
        <h1>{label}</h1>
        <h1 className="uppercase">Currency Type</h1>
      </div>

      <div className="w-full flex items-center justify-between">
        <input
          className="bg-teal-200 font-bold text-4xl outline-none border-none "
          type="number"
          value={amount}
          placeholder="0"
          id="inp"
          onChange={event => onAmountChange(Number(event.target.value))}
        />
        <select
          className="bg-teal-100 outline-none px-4 py-1 rounded-lg"
          name=""
          value={defaultCurreny}
          onChange={(event) => onCurrencyChange(event.target.value)}
        >
          {setOptions.map((items: string, index: number) => (
            <option key={index} value={items}>
              {items}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
