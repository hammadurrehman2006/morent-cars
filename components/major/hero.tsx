// import Options from "../ui/option";
// import { UpDownArrowIcon } from "@/components/ui/icons";
// import { Button } from "@/components/ui/button";
// import {allCars_Q} from "@/sanity/lib/queries";
// import { HeroAds } from "../ui/carAd";
// import Link from "next/link";
// import { CarList, CarsListR } from "./Carist";
// import { client } from '@/sanity/lib/client';
// export default async function Hero(){
// // async function syncCars(): Promise<void> {
// //   try {
// //     // Fetch data from the external API
// //     const cars = await fetchCars();
// //     // Save fetched data to Sanity
// //     await saveCarsToSanity(cars);

// //     console.log('Cars synced successfully!');
// //   } catch (error) {
// //     console.error('Error syncing cars:', error);
// //   }
// // }
// // syncCars();
// const Cars = await client.fetch(allCars_Q)
//   return (
//     <>
//       <div>
//         <section className="p-4 mx-4">
//           <HeroAds />
//           <div className="flex flex-col md:flex-row bg-white justify-between items-center">
//             <Options className="flex-1" title="Pick - Up" />
//             <div className="flex items-center mx-4 -my-4 z-10">
//               <Button size="lg">
//                 <UpDownArrowIcon />
//               </Button>
//             </div>
//             <Options className="flex-1" title="Drop - Off" />
//           </div>
//           <div className="flex justify-between my-3 mx-6">
//             <h3 className="text-secondary-300 font-semibold">Popular Cars</h3>
//             <Link
//               href="/cars"
//               className="text-primary-500 font-semibold hover:underline transition"
//             >
//               View all
//             </Link>
//           </div>
//           <CarList AllCars={Cars} />
//           <hr className="border-b-2 my-10" />
//           <div className="flex justify-start my-3 mx-6">
//             <h3 className="text-secondary-300 font-semibold">Car Recommendations</h3>
//           </div>
//           <CarsListR AllCars={Cars}/>
//         </section>
//       </div>
//     </>
//   );
// };

// Hero.tsx
import Options from "../ui/option";
import { UpDownArrowIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { HeroAds } from "../ui/carAd";
import Link from "next/link";
import { CarList, CarsListR } from "./Carist";
import { Car } from "@/sanity/types/car";

interface HeroProps {
  Cars: Car[]; // Adjust this type based on your car data structure
}

export default function Hero({ Cars }: HeroProps) {
  return (
    <>
      <div>
        <section className="p-4 mx-4">
          <HeroAds />
          <div className="flex flex-col md:flex-row bg-white justify-between items-center">
            <Options className="flex-1" title="Pick - Up" />
            <div className="flex items-center mx-4 -my-4 z-10">
              <Button size="lg">
                <UpDownArrowIcon />
              </Button>
            </div>
            <Options className="flex-1" title="Drop - Off" />
          </div>
          <div className="flex justify-between my-3 mx-6">
            <h3 className="text-secondary-300 font-semibold">Popular Cars</h3>
            <Link
              href="/cars"
              className="text-primary-500 font-semibold hover:underline transition"
            >
              View all
            </Link>
          </div>
          <CarList AllCars={Cars} />
          <hr className="border-b-2 my-10" />
          <div className="flex justify-start my-3 mx-6">
            <h3 className="text-secondary-300 font-semibold">Car Recommendations</h3>
          </div>
          <CarsListR AllCars={Cars} />
        </section>
      </div>
    </>
  );
}
