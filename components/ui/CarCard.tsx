'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "sonner"
import { FilledStarIcon, GasIcon, PeopleIcon, StarIcon, SteerWheelIcon } from "./icons"
interface CarItemProps {
    id?: number
    title: string
    type: string
    imageUrl: string
    gasoline: number
    steering: string
    capacity: number
    price: number
    isLiked: boolean
}

export const CarItem = ({
    id,
    title,
    type,
    imageUrl,
    gasoline,
    steering,
    capacity,
    price,
    isLiked
}: CarItemProps) => {
    const [liked, setLiked] = useState(isLiked || false);

  const handleLikeClick = () => {
    if (id) {
      if (liked) {
        toast.success('Car was removed from your favorites!');
      } else {
        toast.success('Car was added to your favorites!');
      }
      setLiked(!liked);
    } else {
      console.error('Error');
    }
  };

  return (
    <div className="bg-white p-6 rounded-md flex flex-col justify-between gap-2 dark:bg-[#1F1F1F]">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-xl text-[#1A202C] dark:text-white">{title}</h2>
          <p className="font-bold text-sm text-secondary-300">{type}</p>
        </div>
        <div role="button" className="text-xl" onClick={handleLikeClick}>
          {liked ? (
            <FilledStarIcon /> // Render FilledStarIcon when liked is true
          ) : (
            <StarIcon /> // Render StarIcon when liked is false
          )}
        </div>
            </div>
            <div className='flex justify-center'>
                <Image src={`/carlist/${imageUrl}`} alt="Car" width={400} height={100} />
            </div>
            <div className='flex justify-between gap-2 text-secondary-300 text-xs md:text-sm font-medium'>
                <div className='flex items-center gap-1'>
                    <GasIcon/>
                    <span>{gasoline}L</span>
                </div>
                <div className='flex items-center gap-1'>
                    <SteerWheelIcon/>
                    <span>{steering}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <PeopleIcon/>
                    <span>{capacity} People</span>
                </div>
            </div>
            <div className='flex justify-between gap-2 items-center md:gap-0'>
                <div className='text-xl font-bold text-[#1A202C] dark:text-white'>
                    ${price}.00/
                    <span className='ml-0 text-sm text-secondary-300'>day</span>
                </div>
                <Link href={`/cars/${id}`}>
                    <Button size='sm' className='bg-[#3563E9] text-white hover:bg-[#081742]'>See Details</Button>
                </Link>
            </div>
        </div>
    )
}

CarItem.Skeleton = function CarItemSkeleton() {
    return (
        <Skeleton className='h-4 w-4' />
    )
}