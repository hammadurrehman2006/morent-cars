import Bilabel from '../ui/Bilable';

export default function PaymentForm(props: {type: string}) {
  return (
    <div className='mt-8'>
    <h1 className='flex gap-2 items-center font-semibold mb-3 sm:mb-0 text-sm'><div className="w-2 h-2 rounded-full bg-primary animate-pulse ring-4 ring-[#C3D1F9]" />{props.type}</h1>
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-3">
     <Bilabel content="City" inputType="text" holder="Select Your city" bgColor="bg-[#F6F7F9]"/>
     <Bilabel content="Date" inputType="date" holder="Phone number" bgColor="bg-[#F6F7F9]"/>
     <Bilabel content="Time" inputType="time" holder="Address" bgColor="bg-[#F6F7F9]"/>
    </form>
   </div>
  )
}
