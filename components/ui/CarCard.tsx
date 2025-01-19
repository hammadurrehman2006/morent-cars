'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "sonner"
import { FilledStarIcon, GasIcon, PeopleIcon, StarIcon, SteerWheelIcon } from "./icons"
interface CarItemProps {// Assuming `id` is a string from CMS data.
  title: string;
  type: string;
  imageUrl: string;
  gasoline: string;
  steering: string;
  capacity: string;
  price: string;
}
// interface CarItemProps {
//     id?: string
//     title: string
//     type: string
//     imageUrl: string
//     gasoline: string
//     steering: string
//     capacity: string
//     price: string
//     isLiked: boolean
// }
export const CarItem = ({
    title,
    type,
    imageUrl,
    gasoline,
    steering,
    capacity,
    price,
}: CarItemProps) => {
  const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
      setIsLiked((prev) => !prev);
      toast.success(isLiked ? 'Removed from favorites!' : 'Added to favorites!');
    };
  

  return (
    <>
    <div className="bg-[#fff] p-5 rounded-md flex flex-col justify-between gap-2 dark:bg-secondary-500">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-xl text-[#1A202C] dark:text-white">{title}</h2>
          <p className="font-bold text-sm text-secondary-300">{type}</p>
        </div>
        <div role="button" onClick={handleLikeClick}>
          {isLiked ? (
            <FilledStarIcon /> // Render FilledStarIcon when liked is true
          ) : (
            <StarIcon /> // Render StarIcon when liked is false
          )}
        </div>
            </div>
            <div className='flex justify-center'>
                <Image src={imageUrl} alt="Car" width={400} height={100} />
            </div>
            <div className='flex justify-between gap-2 text-secondary-300 text-xs md:text-sm font-medium'>
                <div className='flex items-center gap-1'>
                    <GasIcon/>
                    <span>{gasoline}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <SteerWheelIcon/>
                    <span>{steering}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <PeopleIcon/>
                    <span>{capacity}</span>
                </div>
            </div>
            <div className='flex justify-between gap-2 items-center md:gap-0'>
                <div className='text-lg font-bold text-[#1A202C] dark:text-white'>
                    {price}
                    {/* <span className='ml-0 text-sm text-secondary-300'>day</span> */}
                </div>
                {/* <Link href={`/cars/${id}`}> */}
                <Link href={`/cars/details`}>
                    <Button size='sm' className='bg-[#3563E9] text-white hover:bg-[#081742]'>See Details</Button>
                </Link>
            </div>
        </div>
        </>
        )
}

CarItem.Skeleton = function CarItemSkeleton() {
    return (
        <Skeleton className='h-4 w-4' />
    )
}
// import { useState } from 'react';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// import { toast } from 'sonner';
// import { GasIcon, PeopleIcon, SteerWheelIcon, StarIcon, FilledStarIcon } from './icons';


// export const CarItem = ({
//   id,
//   title,
//   type,
//   imageUrl,
//   gasoline,
//   steering,
//   capacity,
//   price,
// }: CarItemProps) => {
//   const [isLiked, setIsLiked] = useState(false);

//   const handleLikeClick = () => {
//     setIsLiked((prev) => !prev);
//     toast.success(isLiked ? 'Removed from favorites!' : 'Added to favorites!');
//   };

//   return (
//     <div className="bg-[#fff] p-6 rounded-md flex flex-col justify-between gap-2 dark:bg-secondary-500">
//       {/* Car Title and Type */}
//       <div className="flex justify-between">
//         <div>
//           <h2 className="font-bold text-xl text-[#1A202C] dark:text-white">{title}</h2>
//           <p className="font-bold text-sm text-secondary-300">{type}</p>
//         </div>
//         <div role="button" onClick={handleLikeClick}>
//           {isLiked ? <FilledStarIcon /> : <StarIcon />}
//         </div>
//       </div>

//       {/* Car Image */}
//       <div className="flex justify-center">
//         <Image
//           src={imageUrl}
//           alt={`${title} image`}
//           width={400}
//           height={100}
//           className="object-contain"
//         />
//       </div>

//       {/* Car Specifications */}
//       <div className="flex justify-between gap-2 text-secondary-300 text-xs md:text-sm font-medium">
//         <div className="flex items-center gap-1">
//           <GasIcon />
//           <span>{gasoline}</span>
//         </div>
//         <div className="flex items-center gap-1">
//           <SteerWheelIcon />
//           <span>{steering}</span>
//         </div>
//         <div className="flex items-center gap-1">
//           <PeopleIcon />
//           <span>{capacity}</span>
//         </div>
//       </div>

//       {/* Price and Details Link */}
//       <div className="flex justify-between gap-2 items-center md:gap-0">
//         <div className="text-xl font-bold text-[#1A202C] dark:text-white">
//           ${price}.00/
//           <span className="ml-0 text-sm text-secondary-300">day</span>
//         </div>
//         <Link href={`/cars/${id}`}>
//           <Button size="sm" className="bg-[#3563E9] text-white hover:bg-[#081742]">
//             See Details
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// // Skeleton Component for Loading State
// CarItem.Skeleton = function CarItemSkeleton() {
//   return (
//     <div className="bg-[#fff] p-6 rounded-md flex flex-col gap-2 animate-pulse">
//       <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
//       <div className="h-4 bg-gray-300 rounded-md w-3/4 mb-4"></div>
//       <div className="h-20 bg-gray-300 rounded-md mb-4"></div>
//       <div className="flex justify-between gap-2">
//         <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
//         <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
//         <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
//       </div>
//       <div className="h-6 bg-gray-300 rounded-md mt-4"></div>
//     </div>
//   );
// };
