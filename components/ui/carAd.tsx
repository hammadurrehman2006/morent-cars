'use client'

import { AdItem } from "./adCard"

export const HeroAds = () => {

    const cars = {
        adOne: {
            title: 'The Best Platform for Car Rental',
            description: 'Ease of doing a car rental safely and reliably. Of course at a low price.',
            bgImageUrl: '/cars/bgCar.png',
            carImageUrl: '/cars/main1.png',
            btnBg: 'bg-primary-500'
        },
        adTwo: {
            title: 'Easy way to rent a car at a low price',
            description: 'Providing cheap car rental services and safe and comfortable facilities.',
            bgImageUrl: '/cars/bgCar2.png',
            carImageUrl: '/cars/main2.png',
            btnBg: 'bg-[#54A6FF]'
        }
    }

    return (
        <div className='lg:flex lg:justify-center lg:gap-5'>
            <>
                    <AdItem
                        title={cars.adOne.title}
                        description={cars.adOne.description}
                        bgImageUrl={cars.adOne.bgImageUrl}
                        carImageUrl={cars.adOne.carImageUrl}
                        btnBg={cars.adOne.btnBg}
                    />
                    <div className='hidden lg:block '>
                        <AdItem
                            title={cars.adTwo.title}
                            description={cars.adTwo.description}
                            bgImageUrl={cars.adTwo.bgImageUrl}
                            carImageUrl={cars.adTwo.carImageUrl}
                            btnBg={cars.adTwo.btnBg}
                        />
                    </div>
                </>
            
        </div>
    )
}