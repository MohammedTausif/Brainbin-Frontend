// import { ReactElement } from "react";

import { ReactElement } from "react";

export interface ButtonProps{
    title?: string;
    variant: "primary" | "secondary";
    onClick? : ()=> void;
    fullWidth?: boolean;
    loading?: boolean;
    size?: "lg" | "md" | "sm" ;
    startIcon? : ReactElement;
    endIcon?: ReactElement;
    className?: string
}

const variantStyles = {
     "primary": " bg-purple-600 text-white ",
     "secondary": " bg-purple-200 text-purple-600 ",
     "main" : " px-7 py-3 bg-red-600 text-white  "
    }

    const defaultStyles = "md:px-[19px]  px-[8px] py-2 rounded-md font-light flex items-center rounded-md"

export const Button = ({variant, title, startIcon, loading, fullWidth, onClick, className} :ButtonProps ) =>{
    
       return <button onClick={onClick} className={ "hover:bg-purple-500 cursor-pointer"+ variantStyles[variant] + className +"  " + defaultStyles +` ${fullWidth ? "w-full flex justify-center items-center " : ""} ${loading? "opacity-45 ": ""}` } disabled={loading}>
         <div className={`${startIcon? " pr-2  " : ""}`}>
            {startIcon}
         </div>
         <div className="flex justify-center items-center text-center">
         {title}
         </div>
           
       </button>
}