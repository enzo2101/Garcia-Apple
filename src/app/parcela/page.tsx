"use client"

import { useState, ChangeEvent } from "react";
import Header from "~/components/Header/Header";
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
    if (value && parcel) {
      const calculatedParcel = parcelCalculator(value, parcel);
      setParcelValue(calculatedParcel);
      setValue("");
      setParcel("");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-72">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Valor a ser parcelado"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-500"
              onChange={handleValue}
              value={value}
              maxLength={12}
            />
            <input
              type="number"
              placeholder="Quantidade de Parcelas"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-500"
              onChange={handleParcel}
              value={parcel}
            />
            <button onClick={handleCalculate} className="bg-purple-500 text-white rounded-lg py-3 px-6 focus:outline-none hover:bg-purple-600">Ver Valor da Parcela</button>
            {parcelValue && (<div className="text-purple-500 font-semibold">{parcelValue}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcela;
