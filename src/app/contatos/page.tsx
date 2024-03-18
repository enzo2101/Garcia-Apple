"use client"

import React from 'react'
import Header from '~/components/Header/Header'
import SocialMidiaDocker from '~/components/SocialMidiaDocker/SocialMidiaDocker'

import { IoLogoWhatsapp } from "react-icons/io";
import { IconContext } from "react-icons";

const contact = () => {
  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow justify-center items-center px-4">
        <div className="w-full lg:w-auto flex flex-col space-y-10 text-center justify-center">
          <SocialMidiaDocker link={"https://api.whatsapp.com/send/?phone=558488271234&text&type=phone_number&app_absent=0"} social={"Whatsapp"} />
          <SocialMidiaDocker link={"https://www.instagram.com/garciaapple_/"} social={"Instagram"} />
          <SocialMidiaDocker link={"https://goo.gl/maps/TSRkX7iEJAwnXi6R6"} social={"Nossa Localização"} />
        </div>
      </div>
    </div>
  )
}

export default contact