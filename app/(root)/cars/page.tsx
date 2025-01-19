import { Button } from "@/components/ui/button";
import { CarsListComb } from "@/components/major/Carist";
import Filters from "@/components/major/Filters";
import OptionsFull from "@/components/ui/OpFull";
import { client } from "@/sanity/lib/client";
import { allCars_Q } from "@/sanity/lib/queries";

const Cars = async() => {
  const Cars = await client.fetch(allCars_Q)
  return (
    <>
    <div className="max-w-fit">
      <div className=" max-w-7xl grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-2 relative border-r-2 lg:h-screen">
          <Filters />
        </div>
        <div className="lg:col-span-10">
          <OptionsFull className="my-4" />
          <CarsListComb AllCars={Cars} />
          <div className="flex justify-between px-6 mb-14 mt-3 items-center">
            <div></div>
            <Button>Show More Car</Button>
            <h2 className="text-secondary-300 text-lg font-semibold">
              16 Cars
            </h2>
          </div>
        </div>
    </div>
      </div>
    </>
  );
};
export default Cars;
