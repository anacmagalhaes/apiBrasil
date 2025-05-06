import React from 'react'

export const BankCard = ({ fullName, name, ispb, code }) => {
  return (
    <div className="border-2 border-black rounded-2xl m-10 p-2 flex gap-4 w-150">
    <div className="">
      <div className="flex gap-2">
        <h3 className="font-bold font-serif">Nome: </h3>
        <h4>{fullName}</h4>
      </div>
      <div className="flex gap-2">
        <h3 className="font-bold font-serif">Nome Fantasia: </h3>
        <h4>{name}</h4>
      </div>
      <div className="flex gap-2">
        <h3 className="font-bold font-serif">ISPB: </h3>
        <h4>{ispb}</h4>
      </div>
      <div className="flex gap-2">
        <h3 className="font-bold font-serif">Código: </h3>
        <h4>{code}</h4>
      </div>
    </div>
  </div>
  )
}
