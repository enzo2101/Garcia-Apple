"use client"

import { useState, ChangeEvent } from "react";
import formatCurrency from "~/components/formatCurrency/formatCurrency";
import { parcelCalculator } from "~/components/parcelCalculator/parcelCalculator";

const Parcela = () => {
  const [parcel, setParcel] = useState("");
  const [value, setValue] = useState("");
  const [parcelValue, setParcelValue] = useState("");

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = formatCurrency({ value: inputValue });
    setValue(formattedValue);
  };

  const handleParcel = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = inputValue === "" ? "" : inputValue;

    const parsedValue = parseInt(numericValue);
    if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 18) {
      setParcel(numericValue);
    } else {
      if (parsedValue < 1) {
        setParcel("1");
      } else {
        setParcel("18");
      }
    }
  };

  const handleCalculate = () => {
    let calculatedParcel = parcelCalculator(value, parcel);
    setParcelValue(calculatedParcel);
    setValue("");
    setParcel("");
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-96 h-96">
        <div className="flex flex-col space-y-4 w-2/3">
          <input
            type="text"
            placeholder="Valor a ser parcelado"
            className="border-2 border-black rounded-lg pl-3"
            onChange={handleValue}
            value={value}
            maxLength={12}
          />
          <input
            type="number"
            placeholder="Quantidade de Parcelas"
            className="border-2 border-black rounded-lg pl-3"
            onChange={handleParcel}
            value={parcel}
          />
          <button onClick={handleCalculate} className="border-2 border-purple-500 rounded-lg p-1 bg-purple-500">Ver Valor da Parcela</button>
          {parcelValue && (<div>{parcelValue}</div>)}
        </div>
      </div>
    </div>
  );
};

export default Parcela;
