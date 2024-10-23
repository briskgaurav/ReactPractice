import React, { useCallback, useEffect, useState } from "react";

function App() {
  const [passwordLen, setPasswordLen] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const randompass = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "$&#@!+*";

    let pass = "";
    for (let i = 0; i < passwordLen; i++) {
      const data = Math.floor(Math.random() * str.length);
      pass += str.charAt(data);
    }
    setPassword(pass);
  }, [passwordLen, char, num]);

  useEffect(() => {
    randompass();
  }, [length, , char, num, randompass]);


  const HandleClipboard = () => {
    
    window.navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="bg-zinc-900 h-screen w-full flex items-center justify-center text-white">
      <div className="w-[60%] mx-auto bg-zinc-500/50 rounded-lg px-6 py-3 text-center">
        <h1 className="text-blue-500 font-bold text-2xl">Password Generator</h1>
        <div className="flex  items-center justify-center relative overflow-hidden">
          <input
            type="text"
            value={password}
            className="w-full h-10 outline-none text-blue-400 font-medium px-4 rounded-lg mt-5 "
            placeholder="Enter your desired password length"
          />
          <button onClick={()=>{
            HandleClipboard()
          }} className="bg-blue-400  py-2 px-4 absolute right-0 bottom-0">
            Copy
          </button>
        </div>
        <div className="flex gap-10 text-blue-400 font-semibold">
          <div className="mt-4 flex gap-2">
            <input 
              min={6}
              max={50}
              value={passwordLen}
              onChange={(e) => {
                setPasswordLen(parseInt(e.target.value));
              }}
              type="range"
            />
            <label>Password Length {passwordLen}</label>
          </div>

          <div className="mt-4 flex gap-2">
            <input
              type="checkbox"
              defaultChecked={num}
              onChange={() => {
                setNum((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>

          <div className="mt-4 flex gap-2">
            <input
              type="checkbox"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label>Special Charcter </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
