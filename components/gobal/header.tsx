import Image from "next/image";
import profile from "@/public/profile.jpg";
import {
  FilterIcon,
  HeartIcon,
  NotificationIcon,
  SettingsIcon,
} from "@/components/ui/icons";
import Search from "../ui/search";
import Link from "next/link";


const Header = () => {
  return (
    <header className="p-4 bg-white h-30 md:px-8 border-b-2">
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-x-12 w-2/3 items-center">
          <Link href="/" className="text-primary text-2xl font-bold">
            MORENT
          </Link>
          <Search
            iconShow={true}
            className="hidden md:flex flex-1 max-w-sm rounded-full"
          />
        </div>
        <div className="flex items-center gap-x-4">
          <div className="hidden md:flex gap-x-4 [&_div]:cursor-pointer">
            <div>
              <SettingsIcon />
            </div>
            <div>
              <NotificationIcon />
            </div>
            <div>
              <HeartIcon />
            </div>
          </div>
          <Link href={"/admin"}><div className="hover:scale-110 transition-transform duration-300">
            <Image width={50} height={50} src={profile} className="rounded-full" alt="profile" />
          </div></Link>
        </div>
      </div>

      <div className="flex justify-between items-center gap-x-4">
        <Search className="md:hidden" />
        <button
          className="border rounded-lg border-secondary-400/20 p-2 md:hidden"
        >
          <FilterIcon />
        </button>
      </div>
    </header>
  );
};
export default Header;