'use client'
import { cn } from "@/lib/utils"
import { CarItem } from "../ui/CarCard"

const popularCars = [
  {
    id: 1,
    title: "Koenigsegg",
    type: "Sport",
    imageUrl: "car1.png",
    gasoline: 80,
    steering: "Manual",
    capacity: 2,
    price: 99,
    isLiked: false,
  },
  {
    id: 2,
    title: "Nissan GT - R",
    type: "Sport",
    imageUrl: "car2.png",
    gasoline: 90,
    steering: "Manual",
    capacity: 2,
    price: 80,
    isLiked: false,
  },
  {
    id: 3,
    title: "Rolls - Royce",
    type: "Sedan",
    imageUrl: "car3.png",
    gasoline: 70,
    steering: "Manual",
    capacity: 4,
    price: 96,
    isLiked: false,
  },
  {
    id: 4,
    title: "Nissan GT - R",
    type: "Sport",
    imageUrl: "car4.png",
    gasoline: 90,
    steering: "Manual",
    capacity: 2,
    price: 100,
    isLiked: false,
  },
];

const recommendedCars = [
  {
    id: 5,
    title: "All New Rush",
    type: "SUV",
    imageUrl: "car5.png",
    gasoline: 70,
    steering: "Manual",
    capacity: 6,
    price: 72,
    isLiked: false,
  },
  {
    id: 6,
    title: "All New Terios",
    type: "SUV",
    imageUrl: "car6.png",
    gasoline: 90,
    steering: "Manual",
    capacity: 6,
    price: 74,
    isLiked: false,
  },
  {
    id: 7,
    title: "MG ZX Exclusive",
    type: "Hatchback",
    imageUrl: "car7.png",
    gasoline: 70,
    steering: "Manual",
    capacity: 6,
    price: 72,
    isLiked: false,
  },
  {
    id: 8,
    title: "New MG ZS",
    type: "SUV",
    imageUrl: "car8.png",
    gasoline: 80,
    steering: "Manual",
    capacity: 6,
    price: 80,
    isLiked: false,
  },
  {
    id: 9,
    title: "MG ZX Excite",
    type: "Hatchback",
    imageUrl: "car9.png",
    gasoline: 75,
    steering: "Manual",
    capacity: 6,
    price: 78,
    isLiked: false,
  },
  {
    id: 10,
    title: "All New Rush",
    type: "SUV",
    imageUrl: "car5.png",
    gasoline: 65,
    steering: "Manual",
    capacity: 6,
    price: 68,
    isLiked: false,
  },
  {
    id: 11,
    title: "MG ZX Exclusive",
    type: "Hatchback",
    imageUrl: "car7.png",
    gasoline: 85,
    steering: "Manual",
    capacity: 6,
    price: 85,
    isLiked: false,
  },
  {
    id: 12,
    title: "New MG ZS",
    type: "SUV",
    imageUrl: "car8.png",
    gasoline: 95,
    steering: "Manual",
    capacity: 6,
    price: 95,
    isLiked: false,
  },
];

export const CarsList = () => {
  return (
    <div>
      <div
        className={cn(
          'flex flex-nowrap',
          'overflow-x-auto sm:overflow-x-scroll md:overflow-x-hidden lg:overflow-x-hidden',
          'gap-5 lg:gap-3',
          'py-4'
        )}
      >
        {popularCars?.map((car) => (
          <CarItem
            key={car.id}
            id={car.id}
            title={car.title}
            type={car.type}
            imageUrl={car.imageUrl}
            gasoline={car.gasoline}
            steering={car.steering}
            capacity={car.capacity}
            price={car.price}
            isLiked={car.isLiked}
          />
        ))}
      </div>
    </div>
  )
}
export const CarsListR = () => {
  return (
    <div>
      <div className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-5', 'lg:grid-cols-4'
      )}
      >
        {recommendedCars?.map((car) => (
          <CarItem
            key={car.id}
            id={car.id}
            title={car.title}
            type={car.type}
            imageUrl={car.imageUrl}
            gasoline={car.gasoline}
            steering={car.steering}
            capacity={car.capacity}
            price={car.price}
            isLiked={car.isLiked}
          />
        ))}
      </div>
    </div>
  )
}
export const CarsListComb = () => {
  return (
    <div>
      <div className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-3', 'lg:grid-cols-4'
      )}
      >
        {[...popularCars, ...recommendedCars]?.map((car) => (
          <CarItem
            key={car.id}
            id={car.id}
            title={car.title}
            type={car.type}
            imageUrl={car.imageUrl}
            gasoline={car.gasoline}
            steering={car.steering}
            capacity={car.capacity}
            price={car.price}
            isLiked={car.isLiked}
          />
        ))}
      </div>
    </div>
  )
}
