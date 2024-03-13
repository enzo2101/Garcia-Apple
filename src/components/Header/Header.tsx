import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-black w-full p-4 flex justify-between items-center">
      <div>
        <h1 className="text-white">Logo</h1>
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
  );
};

export default Header;
