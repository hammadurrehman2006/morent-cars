"use client";

import React, { useState } from "react";
import Image from "next/image";
import Bilabel from "../ui/Bilable";

export default function PaymentMethod() {
  const [active, setActive] = useState<string | null>(null);

  function handleOptionClick(option: string) {
    setActive(option === active ? null : option);
  }

  const options = [
    { name: "Credit Card", img: "/cars/Visa.png", option: "option1" },
    { name: "PayPal", img: "/cars/PayPal.png", option: "option2" },
    { name: "Bitcoin", img: "/cars/Bitcoin.png", option: "option3" },
  ];

  return (
    <div>
      {options.map((opt, idx) => (
        <div key={idx} className="bg-[#F6F7F9] px-3 py-3 mt-3 rounded-md">
          <div className="flex justify-between items-center">
            <label className="flex gap-2 cursor-pointer" htmlFor={opt.option}>
             
              <input type="radio" id={opt.option} name="card" onClick={() => handleOptionClick(opt.option)} className="cursor-pointer"/>
              <p className="text-sm">{opt.name}</p>
            </label>
            <Image src={opt.img} width={70} height={40} alt={opt.name} />
          </div>
          {active === opt.option && <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
     <Bilabel bgColor="bg-white" content="Card Number" inputType="number" holder="Card Number" />
     <Bilabel bgColor="bg-white" content="Expiration Date" inputType="number" holder="DD/MM/YY" />
     <Bilabel bgColor="bg-white" content="Card Holder" inputType="number" holder="Card Holder" />
     <Bilabel bgColor="bg-white" content="CVC" inputType="text" holder="CVC" />
   </form> }
        </div>
      ))}
    </div>
  );
}
