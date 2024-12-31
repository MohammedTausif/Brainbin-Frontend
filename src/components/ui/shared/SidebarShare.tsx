import { DocIcon } from "../../../icons/DocIcon"
import { InstaIcon } from "../../../icons/InstaIcon"
import { Logo } from "../../../icons/Logo"
import { TwitterIcon } from "../../../icons/TwitterIcon"
import { YoutubeIcon } from "../../../icons/YoutubeIcon"
import { SidebarItem } from "../SidebarItem"
import { useState } from "react"
import { MenuIcon } from "../../../icons/MenuIcon"

export function SidebarShare() {
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
  return <>
    <div className="hidden md:block h-screen bg-white border-r md:w-72 w-48 fixed left-0 top-0 pl-6">
      <div className="flex font-medium text-2xl md:text-4xl pt-8 items-center text-purple-600">
        <div className="pr-2 text-purple-600">
          <Logo />

        </div>
        BrainBin
      </div>
      <div className="flex flex-col h-full justify-between ">
        <div className=" block pt-8 pl-4">
          {
            MenuList.map(({ title, icon }, id) =>
              <SidebarItem text={title} icon={icon} key={id} />)
          }
        </div>
        <div className="w-full  relative left-0  bottom-16 ">

        </div>
      </div>
    </div>
    {/* // Navbar for small screens  */}
    <div className=" md:hidden  block  bg-gray-100 border-r absolute  left-0 top-0 pl-5">
      <div className="flex font-medium text-2xl pt-6 items-center text-purple-600 gap-2">
        <button className="md:hidden cursor-pointer fixed left-3"
          onClick={() => setIsopen(!isopen)}

        >{isopen ? "" : <MenuIcon />} </button>
        <div className=" text-purple-600 relative left-5 " >
          <Logo />

        </div>
        <div className={`fixed inset-y-0 left-0 z-50 w-56 transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out  md:hidden ${isopen ? 'translate-x-0' : '-translate-x-full'} `}>
          <button className="fixed right-4 top-6 text-gray-700 hover:text-black text-base cursor-pointer" onClick={() => setIsopen(false)}>
            X
          </button>
          <h1 className="fixed top-9 flex justify-center items-center gap-2 "><Logo/> Brainbin</h1>
          <ul className="mt-12 space-y-4 text-gray-700  text-lg p-2 ">
          
            {MenuList.map((list) => (
              <li
                className="flex gap-2 items-center hover:bg-gray-200 py-2 rounded ransition-all duration-150"
                key={list.id}>
                {list.icon}{list.title}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>

  </>

}

