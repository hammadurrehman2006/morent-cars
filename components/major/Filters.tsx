import CheckboxText from "../ui/Check";
import { Slider } from "@/components/ui/slider"

const Filters = () => {
  const categories = ["Sedan", "SUV", "Truck", "Hatchback"];
  const capacities = ["2 people", "4 people", "6 people", "8 people"];
  return (
    <>
    <aside className="bg-white  max-w-full text-secondary-300 font-semibold flex flex-col gap-y-4 md:min-h-screen">
      <div className="flex md:flex-col md:mt-4 justify-center flex-row flex-wrap gap-3 md:gap-y-4 pl-3 mb-4">
        <h3>TYPE</h3>
        {categories.map((category) => (
          <CheckboxText key={category} dataName={category} />
        ))}
      </div>
      <div className="flex md:flex-col justify-center md:gap-y-4 flex-wrap gap-3 pl-3">
        <h3>CAPACITY</h3>
        {capacities.map((capacity) => (
          <CheckboxText key={capacity} dataName={capacity} />
        ))}
      </div>
      <div className="my-2 md:mx-3 mx-24">
        <Slider defaultValue={[20]} max={100} step={1}  />
        <h3 className="mt-2 font-medium text-primary-gray-700 dark:text-light-white-100">
          20 / DAY
        </h3>
      </div>
    </aside>
    </>
    );
};

export default Filters;