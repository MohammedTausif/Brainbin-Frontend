interface InputProps {
    placeholder : string;
    reference ? : any;
    type? : string;
    className?: string;
}

export function Input ( {placeholder, reference,className, type}: InputProps){
    return <div>
        <input className={`${className} + px-6 py-2  border rounded-md m-2`} ref={reference} placeholder={placeholder} type={type} />
    </div>
}