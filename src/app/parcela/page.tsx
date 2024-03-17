"use client"

import { useState, ChangeEvent } from "react";
import Header from "~/components/Header/Header";
import formatCurrency from "~/components/formatCurrency/formatCurrency";
import { parcelCalculator } from "~/components/parcelCalculator/parcelCalculator";

const Parcela = () => {
  const [parcel, setParcel] = useState("");
  const [value, setValue] = useState("");
  const [informedValue, setInformedValue] = useState("");
  const [informedParcel, setInformedParcel] = useState("");
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
      setInformedValue(value);
      setInformedParcel(parcel);
      setValue("");
      setParcel("");
    }
  }

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow justify-center items-center">
        <div className="bg-white rounded-lg shadow-5xl p-6 w-96">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Valor a ser parcelado"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-yellow-500"
              onChange={handleValue}
              value={value}
              maxLength={12}
            />
            <input
              type="number"
              placeholder="Quantidade de Parcelas"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-yellow-500"
              onChange={handleParcel}
              value={parcel}
            />
            <button onClick={handleCalculate} className="bg-gradient-to-b from-yellow-500 to-yellow-600 text-lg p-4 rounded-md">Ver Valor da Parcela</button>
            {parcelValue && (
              <>
                <h1>Valor informado: {informedValue}</h1>
                <h1>Quantidade de parcelas: {informedParcel}</h1>
                <h1>Valor de cada parcela: {parcelValue}</h1>
              </>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcela;
