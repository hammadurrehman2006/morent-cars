import { Button } from "@/components/ui/button";
import { CarsListComb } from "@/components/ui/Carist";
import Filters from "@/components/ui/Filters";
import OptionsFull from "@/components/ui/OpFull";

const Cars = () => {
  return (

    <>
    <main className="grid grid-cols-1 lg:grid-cols-12">
      <div className="lg:col-span-2 relative border-r-2 lg:h-screen">
        <Filters />
      </div>
      <div className="lg:col-span-10">
        <OptionsFull className="mb-8" />
        <CarsListComb />
        <div className="flex justify-between px-6 mb-14 mt-3 items-center">
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
