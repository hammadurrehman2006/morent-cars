import HeroSecCard from '@/components/major/HeroCarDet'
import Image from 'next/image'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Button from '@/components/ui/Button1'
// import CarouselInDetailSec from '@/components/CarouselInDetailSec'
import Link from 'next/link'
import Reviews from './Reviews'
// import { SideBar } from './SideBar'


const CarDetPage = () => {
    return (
        <div>
             {/* <SideBar > */}
                <div className='md:flex md:flex-row md:items-center mx-auto justify-center lg:gap-x-5'>
                    <div>
                        <div className='block sm:flex justify-center mt-10 gap-x-5 lg:gap-x-16 '>
                            <HeroSecCard
                                bgImageSrc='second-box-bg-img'
                                headingText='Sports car with the best designn and acceleration'
                                paraText='Safety and comfort while driving a futuristic and elegant sports car'
                                carImageSrc='detailCar'
                                btnBgColor='bg-blue-400'
                                isButton={false}
                                boxClassName='mx-3'
                            />
                        </div>

                        <div className='flex mx-3 mt-7 sm:justify-evenly  justify-between'>
                            <Image src={"/cars/detailCar.png"} alt='Car' height={1000} width={1000} className='w-20 p-[2px] border-blue-500 border-2 rounded-lg' />
                            <Image src={"/cars/detailCar3.png"} alt='Interior of Car' height={1000} width={1000} className='w-20' />
                            <Image src={"/cars/detailCar2.png"} alt='Interior of Car' height={1000} width={1000} className='w-20' />
                        </div>
                    </div>
                    <div className='bg-white rounded-lg m-4 sm:mx-20 md:mx-2 md:w-80 lg:mr-10 text-black'>
                        <Card>
                            <CardHeader>
                                <CardTitle>Nissan GT - R</CardTitle>
                                <CardDescription className='flex items-start'>
                                    <Image src={"/assets/star.png"} alt='stars' height={1000} width={1000} className='w-20' />
                                    <p className='text-xs text-gray-400'>470+ Reviewer</p>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className='text-xs text-gray-400 '>NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most unforgiving proving ground, the &quot;race track&quot;.</p>
                            </CardContent>
                            <CardFooter>
                                <div className="flex items-center justify-between gap-x-2">
                                    <div>
                                        <span className="text-xl font-bold text-black">$82.00</span>
                                        <span className="text-gray-500">/ day</span>
                                    </div>
                                    <Link href="/payment">
                                    <Button btnText='Rent Now' bgColor='bg-blue-600 hover:bg-blue-700 p-2' />
                                    </Link>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
                <Reviews />
            {/* </SideBar> */}
                {/* <CarouselInDetailSec/> */}
        </div>
    )
}

export default CarDetPage
