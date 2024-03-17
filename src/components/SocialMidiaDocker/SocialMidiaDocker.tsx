import Link from 'next/link'
import React from 'react'

import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IconContext } from "react-icons";

const SocialMidiaDocker = ({ link, social }: { link: string, social: string }) => {
  switch (social) {
    case "Whatsapp":
      return (
        <IconContext.Provider value={{ className: "text-green-500" }}>
          <Link className="bg-white rounded-lg shadow-5xl p-6 w-auto text-2xl" href={link}>
            <div className="flex flex-row">
              <div className="flex justify-start mx-auto my-auto">
                <IoLogoWhatsapp />
              </div>
              <div className="flex justify-center w-full">
                {social}
              </div>
            </div>
          </Link>
        </IconContext.Provider>
      );
    case "Instagram":
      return (
        <IconContext.Provider value={{ className: "text-rose-500" }}>
          <Link className="bg-white rounded-lg shadow-5xl p-6 w-auto text-2xl" href={link}>
            <div className="flex flex-row">
              <div className="flex justify-start mx-auto my-auto">
                <FaInstagram />
              </div>
              <div className="flex justify-center w-full">
                {social}
              </div>
            </div>
          </Link>
        </IconContext.Provider>
      );

    case "Nossa Localização":
      return (
        <IconContext.Provider value={{ className: "text-blue-500" }}>
          <Link className="bg-white rounded-lg shadow-5xl p-6 w-auto text-2xl" href={link}>
            <div className="flex flex-row">
              <div className="flex justify-start mx-auto my-auto">
                <MdLocationPin />
              </div>
              <div className="flex justify-center w-full">
                {social}
              </div>
            </div>
          </Link>
        </IconContext.Provider>
      );
  }
}

export default SocialMidiaDocker