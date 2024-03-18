"use client"

import Link from "next/link";
import Header from "~/components/Header/Header";

import PaymentMethod from "~/components/PaymentMethod/PaymentMethod";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow bg-zinc-900">
        <div className="flex justify-center">
          <div className="flex md:flex-row flex-col space-y-10 md:space-y-0 md:space-x-10 py-10 px-4 justify-between md:max-w-[1200px] mx-auto">
            <div className="space-y-4 md:pt-36 md:max-w-[500px] md:text-left">
              <h1 className="font-bold text-4xl md:text-5xl text-white">O Melhor Iphone na sua mão<span className="text-yellow-500">.</span></h1>
              <p className="text-gray-400 font-bold">Nós da Garcia Apple trabalhamos os iPhones com melhor estado de conservação de Natal-RN</p>
              <div>
                <Link href="https://www.instagram.com/garciaapple_/">
                  <button className="bg-gradient-to-b from-yellow-500 to-yellow-600 text-lg p-4 rounded-md">ESCOLHA O SEU</button>
                </Link>
              </div>
            </div>
            <div>
              <img className="rounded-xl h-[500px] w-[400px] md:h-[700px] md:w-[560px]" src="./introducao1.png" alt="Imagem Iphone 15 Pro Max" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full bg-white py-10">
            <div className="md:max-w-[1200px] mx-auto px-4">
              <div className="space-y-4">
                <h1 className="font-bold text-3xl md:text-5xl text-black">Quem somos nós?</h1>
                <p className="text-gray-400 font-bold">
                  A Garcia Apple, empresa especializada na revenda de iPhones, tem como principal valor a busca contínua
                  pela excelência na experiência do cliente. Nosso compromisso é proporcionar a você o melhor produto,
                  acompanhado das mais vantajosas condições de compra. Por isso, oferecemos parcelamento em até 18 vezes
                  e aceitamos seu iPhone usado como parte do pagamento, visando reduzir o custo total do seu novo dispositivo.
                </p>
                <div>
                  <Link href="https://api.whatsapp.com/send/?phone=558488271234&text&type=phone_number&app_absent=0">
                    <button className="bg-gradient-to-b from-yellow-500 to-yellow-600 text-lg p-4 rounded-md">FALAR COM UM DE NOSSOS ATENDENTES</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white md:max-w-[1200px] mx-auto px-4 py-10 space-y-8">
          <h1 className="font-bold text-3xl md:text-5xl">Pagamentos<span className="text-yellow-500">.</span></h1>
          <div className="py-7 px-10 bg-black rounded-lg space-y-10">
            <h1 className="font-bold text-3xl text-yellow-500">FORMAS DE PAGAMENTO</h1>
            <div className="space-y-3">
              <PaymentMethod methodPayment="Cartão de Crédito em até 18x" />
              <PaymentMethod methodPayment="Cartão de débito" />
              <PaymentMethod methodPayment="Transferência bancária" />
              <PaymentMethod methodPayment="Dinheiro" />
              <PaymentMethod methodPayment="Seu aparelho como forma de desconto" />
              <PaymentMethod methodPayment="Pagamento 100% seguros e suporte 24h" />
            </div>
            <div>
              <Link href="https://api.whatsapp.com/send/?phone=558488271234&text&type=phone_number&app_absent=0">
                <button className="bg-gradient-to-b from-yellow-500 to-yellow-600 text-lg p-4 rounded-md text-black ">SAIBA MAIS</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
