import Options from "./option";
import { UpDownArrowIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { HeroAds } from "./carAd";
import Link from "next/link";
import { CarsList, CarsListR } from "./Carist";

const Hero = () => {
  return (
    <>
      <div>
        <section className="p-4 mx-4">
          <HeroAds />
          <div className="flex flex-col md:flex-row bg-[#ffffff] justify-between items-center">
            <Options className="flex-1" title="Pick - Up" />
            <div className="flex items-center mx-4 -my-4 z-10">
              <Button size="lg">
                <UpDownArrowIcon />
              </Button>
            </div>
            <Options className="flex-1" title="Drop - Off" />
          </div>
          <div className="flex justify-between mx-6">
            <h3 className="text-secondary-300 font-semibold">Popular Cars</h3>
            <Link
              href="/cars"
              className="text-primary-500 font-semibold hover:underline transition"
            >
              View all
            </Link>
          </div>
          <CarsList/>
          <hr className="border-b-2 my-14" />
          <div className="flex justify-start mx-6">
            <h3 className="text-secondary-300 font-semibold">Car Recommendations</h3>
          </div>
          <CarsListR/>
        </section>
      </div>
    </>
  );
};
export default Hero;
