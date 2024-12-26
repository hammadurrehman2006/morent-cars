import { Input } from "./input";

export default function Bilabel(props: {content: string, inputType: string, holder: string, bgColor: string}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm">{props.content}</span>
      <Input type={`${props.inputType}`} className={`w-full text-sm py-3 px-3 rounded-md outline-none ${props.bgColor}`} placeholder={`${props.holder}`}/>
    </label>
  );
}
