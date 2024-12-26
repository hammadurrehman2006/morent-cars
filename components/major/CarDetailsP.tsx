import Image from "next/image";
import Reviews from "@/components/major/Reviews";
import Link from "next/link";
import Button from "@/components/ui/Button1";
import { FilledStarIcon, Heart, StarIcon} from "@/components/ui/icons";
import Filters from "@/components/major/Filters";
import {CarsListR } from "@/components/major/Carist";
export default function DetailPage() {
    return (
        <section className="grid grid-cols-1 mb-12 justify-center lg:grid-cols-12 min-h-screen">
             <div className="lg:col-span-2 relative border-r-2 ">
          <Filters />
        </div>
            <div className="lg:col-span-10 bg-[#F6F7F9] px-0 lg:px-5">
                <div className="pt-5 grid grid-cols-1 justify-around gap-4 md:grid-cols-2 md:gap-6">
                    <div className="justify-normal">
                        {/* RentalCar*/}
                        <div className={`bg-[url(/cars/bgCar2.png)] xl:min-h-[300px] w-[100%] rounded-2xl bg-center bg-cover flex flex-col p-3 lg:p-6`}>
                            <div>
                                <h1 className="text-3xl font-semibold text-white w-[85%] sm:w-[50%] md:w-[90%] xl:w-[60%] mt-2">Easy way to rent a car at a low price</h1>
                                <p className="text-base text-white mt-4 w-[85%] sm:w-[70%] md:w-[80%] lg:w-[100%]">Providing cheap car rental services and safe and comfortable facilities.</p>
                                <Button bgColor="bg-[#54A6FF]" btnText="Rental Car" />
                            </div>
                            <div className="flex justify-center">
                                <Image src={"/cars/main2.png"} alt="car Image" width={350} height={450} />
                            </div>
                        </div>
                        <div className="mt-6 md:mt-3 gap-3 flex justify-evenly md:justify-between">
                            <div className="bg-[url(/cars/bgCar2.png)] bg-center bg-cover rounded-md flex justify-center items-center">
                            <Image width={140} height={200} src={"/cars/main2.png"} alt="car interior" className="w-[95%]" />
                            </div>
                            <div className="flex justify-end"><Image width={150} height={200} src={"/cars/detailCar2.png"} alt="car interior" />
                            </div>
                            <div>
                            <Image src={"/cars/detailCar3.png"} width={150} height={200} alt="car interior" /></div>
                        </div>
                    </div>

                    <div className="bg-white px-4 max-w-md py-5 rounded-xl h-max">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-semibold">Nissan GT-R</h1>
                            <Heart className="fill-orange"/>
                            </div>
                        <div className="flex gap-2 items-center">
                            {/* Review-Stars */}
                            <div className="flex">
                                <FilledStarIcon />
                                <FilledStarIcon />
                                <FilledStarIcon />
                                <FilledStarIcon />
                                <StarIcon />
                            </div>
                            <p className="text-sm text-[#6B7280]">440+ Reviewers</p>
                        </div>
                        <p className="mt-8 text-[#525864]">NISMO has become the embodiment of Nissans outstanding performance, inspired by the most unforgiving proving ground, the “race track”.</p>

                        <div className="mt-6 grid gap-y-4 grid-cols-1 sm:grid-cols-2 gap-x-10 sm:gap-y-2">
                            <div className="flex items-center justify-between">
                                <h1 className="text-[#90A3BF]">TypeCar</h1>
                                <p className="text-[#596780]">Sport</p></div>
                            <div className="flex items-center justify-between">
                                <h1 className="text-[#90A3BF]">Capacity</h1>
                                <p className="text-[#596780]">2 Person</p></div>
                            <div className="flex items-center justify-between">
                                <h1 className="text-[#90A3BF]">Steering</h1>
                                <p className="text-[#596780]">Manual</p></div>
                            <div className="flex items-center justify-between">
                                <h1 className="text-[#90A3BF]">Gasoline</h1>
                                <p className="text-[#596780]">70L</p></div>
                        </div>

                        <div className="flex justify-between mt-8">
                            <div className="flex flex-col">
                                <h1><span className="text-xl font-bold">$80.00/</span><span className="text-[#90A3BF] text-base">day</span></h1>
                                <p className="text-[#90A3BF] text-base line-through">$100.00</p>
                            </div>
                            <Link href="/cars/details/payment"><Button btnText="Rent Now" bgColor="bg-[#54A6FF]" /></Link>
                        </div>
                    </div>
                </div>
                <Reviews />
                    <CarsListR/>
            </div>
        </section>
    );
}
