import Image from "next/image"
import { FilledStarIcon, StarIcon } from "../ui/icons"
import { Button } from "../ui/button"


interface Review {
  id: number
  name: string
  position: string
  company: string
  date: string
  rating: number
  content: string
  image: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Muhammad Hammad ur Rehman",
    position: "CEO",
    company: "MRC Tech",
    date: "15 September 2024",
    rating: 5,
    content: "We are very happy with this service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite. Wishing you the best!",
    image: "/profile.jpg"
  },
  {
    id: 2,
    name: "Saifullah Abdullah",
    position: "Founder",
    company: "Center of Chemicals",
    date: "15 August 2024",
    rating: 4,
    content: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite. Higly Recommended!",
    image: "/cars/safeImg.png"
  }
]

export default function Reviews() {
  return (
    <div className="p-4 md:p-6 text-black">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-semibold">Reviews</h2>
          <span className="px-3 py-1 text-sm font-medium text-white bg-primary-500 rounded-full">
            13
          </span>
        </div>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 bg-white rounded-xl shadow-sm md:p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-secondary-400">
                      {review.position} at {review.company}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, index) => (
                  index < review.rating?
                  <FilledStarIcon key={index} /> : <StarIcon key={index}/>
                ))}
                <p className="text-sm text-secondary-400">{review.date}</p>
              </div>

              <p className="text-gray-600 line-clamp-3 md:line-clamp-none">
                {review.content}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-4">
        <Button className="mx-auto">Show All</Button>
        </div>
        </div> 
    </div>
  )
}