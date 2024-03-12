"use client"

import { useState, ChangeEvent } from "react";
import formatCurrency from "~/components/formatCurrency/formatCurrency";

const Parcela = () => {
  const [parcel, setParcel] = useState<number | string>(0);
  const [value, setValue] = useState<number | string>(0);

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = formatCurrency({ value: inputValue });
    setValue(formattedValue);
    console.log(formattedValue)
  };

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
          />
          <input
            type="number"
            placeholder="Quantidade de Parcelas"
            className="border-2 border-black rounded-lg pl-3"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setParcel(e.target.value)}
          />
          <button className="border-2 border-purple-500 rounded-lg p-1 bg-purple-500">Ver Valor da Parcela</button>
        </div>
      </div>
    </div>
  );
};

export default Parcela;
