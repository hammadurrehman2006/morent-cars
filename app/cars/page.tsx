import { Button } from "@/components/ui/button";
import { CarsListComb } from "@/components/major/Carist";
import Filters from "@/components/major/Filters";
import OptionsFull from "@/components/ui/OpFull";

const Cars = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-2 relative border-r-2 lg:h-screen">
          <Filters />
        </div>
        <div className="lg:col-span-10">
          <OptionsFull className="my-4" />
          <CarsListComb />
          <div className="flex justify-between px-6 mb-14 mt-3 items-center">
            <div></div>
            <Button>Show More Car</Button>
            <h2 className="text-secondary-300 text-lg font-semibold">
              120 Car
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cars;
