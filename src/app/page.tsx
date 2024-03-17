"use client"

import Header from "~/components/Header/Header";

import { FaCheck } from "react-icons/fa";
import { IconContext } from "react-icons";
import PaymentMethod from "~/components/PaymentMethod/PaymentMethod";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow bg-zinc-900">
        <div className="flex justify-center">
          <div className="flex xl:flex-row flex-col space-y-10 xl:space-y-0 xl:space-x-10 py-10 px-4 justify-between xl:max-w-[1200px] mx-auto">
            <div className="space-y-4 xl:pt-36 xl:max-w-[500px] xl:text-left">
              <h1 className="font-bold text-4xl xl:text-5xl text-white">O Melhor Iphone na sua mão<span className="text-yellow-500">.</span></h1>
              <p className="text-gray-400 font-bold">Nós da Garcia Apple trabalhamos os iPhones com melhor estado de conservação de Natal-RN</p>
              <button className="bg-gradient-to-b from-yellow-500 to-yellow-600 text-lg p-4 rounded-md">ESCOLHA O SEU</button>
            </div>
            <div>
              <img className="rounded-xl h-[500px] w-[400px] xl:h-[700px] xl:w-[560px]" src="./introducao1.png" alt="Imagem Iphone 15 Pro Max" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full bg-white py-10">
            <div className="xl:max-w-[1200px] mx-auto px-4">
              <div className="space-y-4">
                <h1 className="font-bold text-3xl xl:text-5xl text-black">Quem somos nós?</h1>
                <p className="text-gray-400 font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe alias doloremque rem eaque exercitationem, quidem quaerat nam sit praesentium adipisci ipsa incidunt odit quod maiores voluptatum quo a, fuga reiciendis?
                  Iste nobis eveniet ut dolores, amet illum cumque mollitia error accusantium, nihil, expedita ipsum molestiae sit blanditiis harum cupiditate minus esse sint. Consectetur autem eius sit impedit earum voluptate fuga.</p>
                <button className="bg-gradient-to-b from-yellow-500 to-yellow-600 text-lg p-4 rounded-md">FALAR COM UM DE NOSSOS ATENDENTES</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white xl:max-w-[1200px] mx-auto px-4 py-10 space-y-8">
          <h1 className="font-bold text-3xl xl:text-5xl">Pagamentos<span className="text-yellow-500">.</span></h1>
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
            <button className="bg-gradient-to-b from-yellow-500 to-yellow-600 text-lg p-4 rounded-md text-black ">SAIBA MAIS</button>
          </div>
        </div>
      </div>
    </div>
  );
}
