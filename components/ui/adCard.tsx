import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AdsProps {
  title: string;
  description: string;
  bgImageUrl: string;
  carImageUrl: string;
  btnBg: string;
}

export const AdItem = ({
  title,
  description,
  bgImageUrl,
  carImageUrl,
  btnBg,
}: AdsProps) => {
  return (
    <div className="relative">
      <Image src={bgImageUrl} width={1000} height={800} alt="AdItem Background" className="rounded-xl" />
      <div className="absolute top-4 left-4 z-10 md:top-6 md:left-6">
        <h2 className="text-sm text-white leading-[36px] font-semibold mb-1 md:text-3xl md:max-w-[284px] md:mb-4">
          {title}
        </h2>
        <p className="text-xs max-w-xs font-medium text-white mb-3 md:text-base md:max-w-[284px] md:mb-5">
          {description}
        </p>
        <Link href="/cars">
          <Button
            className={cn(
              btnBg,
              "text-xs md:text-base text-white hover:bg-[#081742]",
              btnBg === "bg-information" ? "py-3 px-7" : "py-2 px-5"
            )}
          >
            Rental Car
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-3 left-36">
        <Image width={350} height={150} src={carImageUrl} alt="Car" />
      </div>
    </div>
  );
};
