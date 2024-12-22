import { ReactElement } from "react";

 interface itemProps{
    text: string;
    icon :ReactElement;
    onClick?: ()=> void
 }
export function LogoutButton({text, icon, onClick}:itemProps) {
   return <div onClick={onClick} className="flex items-center text-black py-3 cursor-pointer rounded max-w-48 transition-all duration-150">
       <div className="pr-2">
         {text} 
       </div>
       <div className="">
         {icon} 
       </div>
     </div>
   
 }
 