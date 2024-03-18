"use client"

import { useState, ChangeEvent, useRef } from "react"; // Importação de hooks e componentes necessários
import Header from "~/components/Header/Header"; // Importação do componente de cabeçalho
import formatCurrency from "~/components/formatCurrency/formatCurrency"; // Importação da função de formatação de moeda
import { parcelCalculator } from "~/components/parcelCalculator/parcelCalculator"; // Importação da função de cálculo de parcela

const Parcela = () => {
  // Definição de estados e referências
  const [parcel, setParcel] = useState(""); // Estado para a quantidade de parcelas
  const [value, setValue] = useState(""); // Estado para o valor a ser parcelado
  const [downValue, setDownValue] = useState(""); // Estado para o valor da entrada

  const prevDownValue = useRef(""); // Referência para o valor da entrada anterior
  const prevValue = useRef(""); // Referência para o valor a ser parcelado anterior
  const prevParcel = useRef(""); // Referência para a quantidade de parcelas anterior

  const [parcelValue, setParcelValue] = useState(""); // Estado para o valor de cada parcela

  // Função para lidar com a mudança no valor a ser parcelado
  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = formatCurrency({ value: inputValue });
    setValue(formattedValue);
  };
  
  // Função para lidar com a mudança no valor da entrada
  const handleDownValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputDownValue = e.target.value;
    const formattedDownValue = formatCurrency({ value: inputDownValue });
    setDownValue(formattedDownValue);
  };

  // Função para lidar com a mudança na quantidade de parcelas
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

  // Função para lidar com o cálculo das parcelas
  const handleCalculate = () => {
    if (value && parcel && downValue) {
      const calculatedParcel = parcelCalculator(value, parcel, downValue);
      setParcelValue(calculatedParcel);
      
      // Atualização dos valores anteriores após o cálculo
      prevDownValue.current = downValue;
      prevValue.current = value;
      prevParcel.current = parcel;

      // Limpeza dos campos após o cálculo
      setDownValue("");
      setValue("");
      setParcel("");
    }
    else {
      alert("Preencha todos os campos");
    }
  }

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <Header /> {/* Componente de cabeçalho */}
      <div className="flex flex-grow justify-center items-center">
        <div className="bg-white rounded-lg shadow-5xl p-6 w-auto">
          <div className="flex flex-col space-y-4">
            {/* Campos de entrada para valores */}
            <input
              type="text"
              placeholder="Valor da Entrada"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-yellow-500"
              onChange={handleDownValue}
              value={downValue}
              maxLength={12}
            />
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
            {/* Botão para calcular as parcelas */}
            <button onClick={handleCalculate} className="bg-gradient-to-b from-yellow-500 to-yellow-600 text-lg p-4 rounded-md">Ver Valor da Parcela</button>
            {/* Exibição dos valores anteriores e do valor de cada parcela */}
            {parcelValue && (
              <>
                <h1>Valor de Entrada: <span className="text-yellow-500 font-bold">{prevDownValue.current}</span></h1>
                <h1>Valor informado: <span className="text-yellow-500 font-bold">{prevValue.current}</span></h1>
                <h1>Quantidade de parcelas: <span className="text-yellow-500 font-bold">{prevParcel.current}</span></h1>
                <h1>Valor de cada parcela: <span className="text-yellow-500 font-bold">{parcelValue}</span></h1>
              </>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcela;
