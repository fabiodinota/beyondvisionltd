import React, { useState, useRef } from 'react';


const Converter = () => {

  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');
  const [binaryError, setBinaryError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const pTag = useRef();

   const toBinary = (number) => {
    let result = 0;
    let i = 0;
    while(number >= 1) {
      let reminder = number % 2;
      if (reminder) {
        result += Math.pow(10, i);
      }
      i++;
      number = Math.floor(number / 2);
    }
  
    return result;
}

 const toDecimal = (number) => {
    let result = 0;
    let i = 0;
    while(number > 0) {
      let reminder = number % 10;
      if (reminder) {
        result += Math.pow(2, i);
      }
      i++;
      number = Math.floor(number / 10);
    }
    return result;
}


  const handleBinaryChange = (e) => {
    const binaryValue = e.target.value;
    setNumberError(false);
    if (isNaN(binaryValue)) {
      setNumberError(true);
      return;
    }
    setBinaryError(!/^[0-1]+$/g.test(binaryValue) && binaryValue !== '');
    if (binaryValue !== '') {
      setBinary(binaryValue);
      setDecimal(toDecimal(binaryValue));
    } else {
      setBinary('');
      setDecimal('');
    }
  };

  const handleDecimalChange = (e) => {
    const decimalValue = e.target.value;
    setNumberError(false);
    if (isNaN(decimalValue)) {
      setNumberError(true);
      return;
    }
    if (decimalValue !== '') {
      setDecimal(decimalValue);
      setBinary(toBinary(decimalValue));
    } else {
      setDecimal('');
      setBinary('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDecimal(toDecimal(binary));
  };

  let binaryErrorMessage = 'Enter only Binary value (either 0 or 1)';
  let numberErrorMessage = 'Enter only Numbers';

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col p-10" >
        <input
          type="text"
          placeholder="Binary"
          onChange={handleBinaryChange}
          value={binary}
          className="border-2 border-gray-300 p-2 rounded-lg mb-2"
        />
        <p>{binary}</p>
        {/* <input type="submit" value="Convert" disabled={binaryError} /> */}
        <input
          type="text"
          placeholder="Decimal"
          onChange={handleDecimalChange}
          ref={pTag}
          disabled={binaryError}
          className="border-2 border-gray-300 p-2 rounded-lg mb-2"
        />
        <span
          className={`error-msg ${binaryError || numberError ? 'fadeIn' : ''} `}
        >
          {binaryError && binaryErrorMessage}
          {numberError && numberErrorMessage}
        </span>
      </form>
      
    </div>
  );
};

export default Converter;