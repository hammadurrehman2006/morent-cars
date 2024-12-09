import { Button } from "@/components/ui/button";
import { CarsListComb } from "@/components/ui/Carist";
import Filters from "@/components/ui/Filters";
import OptionsFull from "@/components/ui/OpFull";

const Cars = () => {
  return (

    <>
      <main className=" grid grid-cols-12 gap-2">
        <div className="col-span-2 relative border-r-2">
          <Filters />
        </div>
        <div className="col-span-12 lg:col-span-10 p-2">
          <OptionsFull className="mb-8" />
          <CarsListComb />
          <div className="flex justify-between px-10 mb-14 items-center">
            <div></div>
            <Button>Show More Car</Button>
            <h2 className="text-secondary-300 text-lg font-semibold">
              120 Car
            </h2>
          </div>
        </div>
      </main>
    </>
  );
};
export default Cars;
