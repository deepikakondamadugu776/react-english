import { useCallback, useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [Password, setPassword] = useState("");
  const [Number, setNumber] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (Number) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, Number, charAllowed]);

  useEffect(() => {
    PasswordGenerator();
  }, [PasswordGenerator]);
  const pwd = useRef(null);
  const copyfunction = () => {
    window.navigator.clipboard.writeText(Password);
    pwd.current.select();
  };
  return (
    <div className="border-t border-gray-200">
      <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
        <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-600"
            >
              PasswordGenerator
            </label>
            <input
              type="text"
              value={Password}
              id="footer-field"
              name="footer-field"
              placeholder="Password"
              readOnly
              ref={pwd}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={copyfunction}
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={120}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="Length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={Number}
              onChange={() => {
                setNumber((prev) => !prev);
              }}
              name="Number"
              id="Number"
            />
            <label htmlFor="Number">Include Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
              name="charAllowed"
              id="charAllowed"
            />
            <label htmlFor="charAllowed">Include Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
