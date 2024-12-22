import { DocIcon } from "../../../icons/DocIcon"
import { InstaIcon } from "../../../icons/InstaIcon"
import { Logo } from "../../../icons/Logo"
import { TwitterIcon } from "../../../icons/TwitterIcon"
import { YoutubeIcon } from "../../../icons/YoutubeIcon"
import { SidebarItem } from "../SidebarItem"

export function SidebarShare() {
      const MenuList = [
        {
          id: 1,
          title: "Tweets",
          icon: <TwitterIcon/>
        }, {
          id: 2,
          title: "Videos",
          icon: <YoutubeIcon/>
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
  <div className="h-screen bg-white border-r md:w-72 w-48 fixed left-0 top-0 pl-6">
      <div className="flex font-medium text-2xl md:text-4xl pt-8 items-center text-purple-600">
        <div className="pr-2 text-purple-600">
          <Logo />
  
        </div>
        BrainBin
      </div>
      <div className="flex flex-col h-full justify-between ">
        <div className="pt-8 pl-4">
          {
            MenuList.map(({ title, icon }, id) =>
              <SidebarItem text={title} icon={icon} key={id} />)
          }
        </div>
        <div className="w-full  relative left-0  bottom-16 ">
         
        </div>
      </div>
    </div>
    <div>
      
    </div> 
    </>
  
}

