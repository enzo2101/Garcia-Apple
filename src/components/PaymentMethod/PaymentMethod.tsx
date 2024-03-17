import React from 'react'

import { FaCheck } from "react-icons/fa";
import { IconContext } from "react-icons";

const PaymentMethod = ({methodPayment}: {methodPayment: string}) => {
  return (
    <IconContext.Provider value={{ className: "text-yellow-500" }}>
      <div className="flex items-center space-x-2">
        <FaCheck />
        <p className="font-bold">{methodPayment}</p>
      </div>
    </IconContext.Provider>
  )
}

export default PaymentMethod