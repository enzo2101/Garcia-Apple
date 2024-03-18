import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-black w-full">
      <div className="flex md:mx-auto justify-between py-8 px-2 md:max-w-[1100px]">
        <div className="mx-auto lg:mx-0 my-auto flex" >
          <Link href={"/"}>
            <img className="" src="./Logo.png" alt="Logo Garcia" />
          </Link>
        </div>

        <div className="space-x-2 flex justify-center items-center text-lg">
          <Link className="text-white p-2 bg-zinc-800 rounded-md" href={"/parcela"}>Parcela</Link>
          {/* <Link className="text-white" href={"/produtos"}>Produtos</Link> */}
          <Link className="text-white p-2 bg-zinc-800 rounded-md" href={"/contatos"}>Contatos</Link>
          {/* <Link className="text-white p-2 bg-zinc-800 rounded-md" href={"/recibos"}>Recibos</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
