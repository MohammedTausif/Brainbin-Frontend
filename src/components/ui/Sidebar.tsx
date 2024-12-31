import { useNavigate, } from "react-router-dom";
import { DocIcon } from "../../icons/DocIcon";
import { InstaIcon } from "../../icons/InstaIcon";
import { Logo } from "../../icons/Logo";
import { LogoutIcon } from "../../icons/LogoutIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { LogoutButton } from "./Logout";
import { SidebarItem } from "./SidebarItem";
import axios from "axios";
import { useContent } from "../../hooks/useContent";
import { useState } from "react";
import { MenuIcon } from "../../icons/MenuIcon";


export function Sidebar() {
  const navigate = useNavigate()
  const { name } = useContent()
  const [isopen, setIsopen] = useState(false)
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


  return <>

    <div className=" hidden md:block h-screen bg-white border-r md:w-72 fixed left-0 top-0 pl-6">
      <div className="flex font-medium text-2xl md:text-4xl pt-8 items-center text-purple-600">
        <div className="pr-2 text-purple-600">
          <Logo />
        </div>
        BrainBin
      </div>
      <div className=" hidden md:flex flex-col h-full justify-between ">

        <div className="pt-8 pl-4">
          <div>username {name}</div>
          {
            MenuList.map(({ title, icon }, id) =>
              <SidebarItem text={title} icon={icon} key={id} />)
          }
        </div>
        <div className="w-full  relative left-0  bottom-16 ">
          <div className={` w-full hover:bg-gray-200 cursor-pointer flex justify-center text-lg}`}
            onClick={HandleLogout} >
            <LogoutButton onClick={HandleLogout} text="Logout" icon={<LogoutIcon />} />
          </div>
        </div>
      </div>
    </div>
  </>
}
