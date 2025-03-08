
export function LinkCard({open, close}: any) {
  return <>{
    open && <div> 
    <div className={` w-screen h-screen bg-slate-600  fixed top-0  left-[100%-288px]  opacity-60 flex justify-center `}>
    </div>
    <button className=" relative bg-red-500 cursor-pointer flex justify-center items-center" onClick={close}>
        click me 
    </button>
    </div>
  }
    </> 
}

