import { ReactElement } from "react";

 interface itemProps{
    text: string;
    icon :ReactElement
 }
export function SidebarItem({text, icon}:itemProps) {
   return <div className="flex text-gray-700 py-3 cursor-pointer hover:bg-gray-200 rounded max-w-48 transition-all duration-150">
       <div className="pr-2">
         {icon} 
       </div>
       <div>
         {text} 
       </div>
     </div>
   
 }
 