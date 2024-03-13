"use client"

import Header from "~/components/Header/Header";

export default function HomePage() {
  return (
    <div >
      <Header />
      <div className="h-screen">
        <div className="bg-black h-3/5">
          <div className="flex align-baseline justify-between px-24 pt-11">
            <div className="space-y-14 w-3/5 ">
              <h1 className="font-bold text-6xl text-white">O Melhor Iphone na sua mão<span className="text-yellow-500">.</span></h1>
              <p className="text-gray-400">Nós da Garcia Apple trabalhamos os iphones
                com melhor estado de conservação de Natal-RN</p>
              <button className="bg-yellow-500 p-3 rounded-md ">ESCOLHA O SEU</button>
            </div>
            <div>
              <img className=" rounded-xl h-[730px] w-[600px]" src="./introducao1.png" alt="Imagem Iphone 15 Pro Max" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
