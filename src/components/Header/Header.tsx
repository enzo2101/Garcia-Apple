import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-black w-full">
      <div className="text-xl p-10 flex max-w-[1200px] justify-between ml-auto mr-auto">
        <div>
          <Link href={"/"}>
            <img src="./Logo.png" alt="Logo Garcia" />
          </Link>
        </div>
        <div className="md:hidden">
          <select className="bg-black border-none text-white" onChange={(e) => window.location.href = e.target.value}>
            <option value="">☰</option>
            <option value="/parcela">Parcela</option>
            <option value="/produtos">Produtos</option>
            <option value="/contatos">Contatos</option>
            <option value="/recibos">Recibos</option>
          </select>
        </div>

        <div className="hidden md:flex items-center space-x-5">
          <Link className="text-white" href={"/parcela"}>Parcela</Link>
          <Link className="text-white" href={"/produtos"}>Produtos</Link>
          <Link className="text-white" href={"/contatos"}>Contatos</Link>
          <Link className="text-white" href={"/recibos"}>Recibos</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
