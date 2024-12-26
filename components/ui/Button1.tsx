import React from 'react'

interface ButtonProps{
    btnText: string;
    bgColor: string;
}

const Button = ({btnText, bgColor}: ButtonProps) => {
  return (
    <div>
      {/* <Link href={`/${link}`}> */}
      <button className={`py-3 px-6 ${bgColor} text-white text-sm rounded-md`}>{btnText}</button>
      {/* </Link> */}
    </div>
  )
}
export default Button
