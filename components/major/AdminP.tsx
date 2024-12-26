import Image from "next/image";
import Link from "next/link";
import AdminSide from "@/components/major/AdminSide";
import Options from "@/components/ui/option";
import { Home, Car, BarChart3, Wallet2, MessageSquare, Calendar, Settings, HelpCircle, Moon, LogOut} from 'lucide-react'
export default function AdminPage() {
  const admin = [
    { icon: <Home className="text-[#78889f]"/>, alt: "Dashboard", LinkName: "Dashboard" },
    { icon: <Car className="text-[#78889f]"/>, alt: "Car", LinkName: "Car Rent" },
    { icon: <BarChart3 className="text-[#78889f]"/>, alt: "Insight", LinkName: "Insight" },
    { icon: <Wallet2 className="text-[#78889f]"/>, alt: "Reimburse", LinkName: "Reimburse" },
    { icon: <MessageSquare className="text-[#78889f]"/>, alt: "Inbox", LinkName: "Inbox" },
    { icon: <Calendar className="text-[#78889f]"/>, alt: "Calender", LinkName: "Calender" },
  ];

  const prefrences = [
    { icon: <Settings className="text-[#78889f]"/>, alt: "Settings", LinkName: "Settings" },
    { icon: <HelpCircle className="text-[#78889f]"/>, alt: "Help", LinkName: "Help & Center" },
    { icon: <Moon className="text-[#78889f]"/>, alt: "mode", LinkName: "Dark Mode" },
  ];
  const popularCarsDetail = [
    { color: "bg-[#0D3559]", carType: "Sport Car", num: "17,439" },
    { color: "bg-[#175D9C]", carType: "SUV", num: "9,478" },
    { color: "bg-[#2185DE]", carType: "Coupe", num: "18,197" },
    { color: "bg-[#63A9E8]", carType: "Hatchback", num: "12,510" },
    { color: "bg-[#A6CEF2]", carType: "MPV", num: "14,406" },
  ];

  const transactionCars = [
    {
      carImg: "/carlist/car2.png",
      carName: "Nissan GT-R",
      carType: "Sport Car",
      carTime: "20 July",
      carPrice: "$80.00",
    },
    {
      carImg: "/carlist/car1.png",
      carName: "Koegnigsegg",
      carType: "Sport Car",
      carTime: "19 July",
      carPrice: "$99.00",
    },
    {
      carImg: "/carlist/car3.png",
      carName: "Rolls-Royce",
      carType: "Sport Car",
      carTime: "18 July",
      carPrice: "$96.00",
    },
    {
      carImg: "/carlist/car5.png",
      carName: "CR-V",
      carType: "SUV",
      carTime: "17 July",
      carPrice: "$80.00",
    },
  ];

  return (
    <section className="flex min-h-[100vh]">
      <div className="bg-white min-h-[100vh] relative min-w-[250px] pt-5 px-4 shadow-inner hidden lg:block">
        <h1 className="text-[#78889f] text-base">Main Menu</h1>
        <div className="flex flex-col gap-1 mt-3">
          {admin.map((val, idx) => (
            <AdminSide
              key={idx}
              icon={val.icon}
              LinkName={val.LinkName}
            />
          ))}
        </div>

        <h1 className="text-[#78889f] text-base mt-10">Prefrences</h1>
        <div className="flex flex-col gap-1 mt-3">
          {prefrences.map((val, idx) => (
            <AdminSide
              key={idx}
              icon={val.icon}
              LinkName={val.LinkName}
            />
          ))}
        </div>

        <div className="w-[87%] py-2 px-2 absolute bottom-3 flex gap-2 items-center hover:bg-[#3563E9] group cursor-pointer rounded-md">
          <LogOut className="text-[#78889f]"/>
          <p className="text-sm text-[#6c7c93] group-hover:text-white">
            Log Out
          </p>
        </div>
      </div>

      <div className="bg-[#F6F7F9] px-2 sm:px-3 xl:px-7 py-3 xl:py-6 grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <div className="bg-white rounded-md py-6 px-4">
          <h1 className="font-semibold text-xl">Details Rental</h1>
          <Image src={"/cars/Maps.png"} alt="map" width={1000} height={850} />
          <div className="flex flex-col-reverse sm:flex-row gap-3 items-center mt-3">
            <div className="w-full sm:w-max flex justify-start items-center">
              <div className="bg-[url(/cars/bgCar2.png)] bg-center w-[140px] bg-cover rounded-md flex justify-center items-center p-4 mt-3">
                <Image src={"/cars/main2.png"} alt="car interior" width={150} height={75} />
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col">
                <h1 className="text-[22px] font-semibold">Nissan GT-R</h1>
                <p className="text-[#3D5278] text-xs">Sport Car</p>
              </div>
              <p className="text-[#3D5278] text-xs pr-16">#3197</p>
            </div>
          </div>
          <Options title="Pick-Up"/>
          <Options title="Drop-Off"/>
          <div className="flex justify-between items-center pt-6 mt-12 border-t-2 border-[#C3D4E966]">
            <div>
              <h1 className="text-lg font-bold">TotalRentalPrice</h1>
              <p className="text-sm text-[#90A3BF]">
                Overall price and includes rental discount
              </p>
            </div>
            <h1 className="text-xl font-bold">$80.00</h1>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-md py-6 px-4">
            <div className="flex justify-between items-center mb-7 sm:mb-0">
              <h1 className="text-xl font-semibold">Top 5 Car Rental</h1>
              <div  className="inline">
              <div className="w-1 h-1 rounded-full ring-3 ring-primary" />
              <div className="w-2 h-2 rounded-full ring-3 ring-[#C3D1F9]" />
              <div className="w-2 h-2 rounded-full ring-3 ring-[#C3D1F9]" />
            </div></div>
            <div className="flex flex-col sm:flex-row gap-7 sm:gap-4 mt-5">
              <div className="relative w-full justify-center sm:w-[70%] flex items-center">
                <Image
                  src={"/cars/Chart.png"}
                  alt="CarsChart"
                  width={220} height={220}
                />
                <div className="flex flex-col items-center justify-center absolute inset-0">
                  <h1 className="sm:text-2xl md:text-base xl:text-[20px] font-semibold">
                    72,030
                  </h1>
                  <p className="text-[#90A3BF] text-sm md:text-xs">
                    Rental Car
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 justify-center w-full sm:w-[65%]">
                {popularCarsDetail.map((val, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${val.color}`}
                      ></div>
                      <p className="text-[#90A3BF] text-sm">{val.carType}</p>
                    </div>
                    <h1 className="text-base">{val.num}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md py-6 px-4">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-xl font-semibold">Recent Transaction</h1>
              <Link href="/" className="text-sm text-[#2185DE] hover:underline">
                View All
              </Link>
            </div>
            {transactionCars.map((data, index) => (
              <div key={index} className="flex items-center gap-2 py-2 mt-6">
                <div className="w-[22%] sm:w-[17%] md:w-[23%]">
                  <Image
                    src={data.carImg}
                    alt="transaction cars"
                    width={100}
                    height={30}
                  />
                </div>
                <div className="flex flex-col w-[78%] sm:w-[83%] md:w-[77%]">
                  <div className="flex justify-between items-center">
                    <h1 className="text-base xl:text-lg font-semibold">
                      {data.carName}
                    </h1>
                    <p className="text-xs xl:text-sm text-[#90A3BF]">
                      {data.carTime}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs xl:text-sm text-[#90A3BF]">
                      {data.carType}
                    </p>
                    <h1 className="text-base xl:text-lg font-semibold">
                      {data.carPrice}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}