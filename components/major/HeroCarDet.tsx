import Image from 'next/image'
import React from 'react'
import Button from '../ui/Button1'

interface HeroSecCardProps {
    bgImageSrc: string;
    headingText: string;
    paraText: string;
    carImageSrc: string;
    boxClassName?: string;
    btnBgColor: string;
    isButton?: boolean
}

const HeroSecCard = ({ bgImageSrc, headingText, paraText, carImageSrc, boxClassName = "", btnBgColor, isButton = true }: HeroSecCardProps) => {
    return (
        <div
            className={`bg-cover bg-center rounded-md ${boxClassName}`}
            style={{ backgroundImage: `url('/assets/${bgImageSrc}.png')` }}
        >
            <div className='flex flex-col gap-y-5'>
                <div className='flex flex-col items-start gap-y-3 text-white pl-3 pt-3 xs:mr-40 sm:mr-2 md:mr-24'>

                    <h2 className='text-lg font-medium tracking-tight lg:pr-16 md:font-semibold md:text-xl'>{headingText}</h2>
                    <p className='text-sm font-thin leading-tight lg:pr-16'>{paraText}</p>
                    {isButton && <Button btnText='Rental Car' bgColor={btnBgColor} />}
                </div>
                <div className='flex justify-center pb-2 '>
                    <Image src={`/assets/${carImageSrc}.png`} alt='Car' height={1000} width={1000} className='w-44 xs:w-56' />
                </div>
            </div>
        </div>
    )
}
export default HeroSecCard

