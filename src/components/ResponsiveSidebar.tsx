import { useNavigate } from "react-router-dom";
import { LogoutIcon } from "../icons/LogoutIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { InstaIcon } from "../icons/InstaIcon";
import { DocIcon } from "../icons/DocIcon";
import axios from "axios";
import { useState } from "react";
import { Logo } from "../icons/Logo";
import { MenuIcon } from "../icons/MenuIcon";


export function ResponsiveSidebar() {
    const [isopen, setIsopen] = useState(false)
    const navigate = useNavigate()

    const MenuList = [
        {
          id: 1,
          title: "Tweets",
          icon: <TwitterIcon />
        }, {
          id: 2,
          title: "Videos",
          icon: <YoutubeIcon />
        }, {
          id: 3,
          title: "Posts",
          icon: <InstaIcon />
        }, {
          id: 4,
          title: "Documents",
          icon: <DocIcon />
        }]
    
    
      const HandleLogout = () => {
        localStorage.removeItem('token');
        delete
          axios.defaults.headers.common['Authorization'];
        navigate("/");
      }
  return <div className=" md:hidden   bg-gray-100 border-none  left-0 top-0 pl-5 gap-2  ">
      <div className=" relative font-medium flex  items-center text-purple-600 gap-2">
        <button className="fixed cursor-pointer top-6 left-3"
          onClick={()=>setIsopen(!isopen)} 
        >{isopen ? "" : <MenuIcon/>} </button>
        {/* <div className="absolute text-purple-600  left-12 top-8" >
          <Logo />
        </div> */}
        </div>
        <div className={`fixed inset-y-0 left-0 z-50 w-56 transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out  md:hidden ${isopen ? 'translate-x-0' : '-translate-x-full'} `}>
          <button className="fixed right-4 top-6 text-gray-700 hover:text-black text-base cursor-pointer" onClick={() => setIsopen(false)}>
            X
          </button>
          <h1 className="fixed top-9 text-2xl  text-purple-600 flex justify-center items-center gap-2 "><Logo /> Brainbin</h1>
          <ul className="mt-12 space-y-4 text-gray-700  text-lg p-2 ">

            {MenuList.map((list) => (
              <li
                className="flex gap-2 items-center hover:bg-gray-200 py-2 rounded ransition-all duration-150"
                key={list.id}>
                {list.icon}{list.title}
              </li>
            ))}
            <li
              className="flex gap-2 items-center hover:bg-gray-200 py-2 rounded ransition-all duration-150"
              onClick={HandleLogout}
            >
              <LogoutIcon /> Logout</li>

          </ul>

        </div>
    </div>


}

