import { useEffect, useState } from "react";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { Sidebar } from "../components/ui/Sidebar";
import { Button } from "../components/ui/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { BACKEND_URL, FE_URL } from "../config";
import axios from "axios";
import { Card } from "../components/ui/Card";
import { useContent } from "../hooks/useContent";

export  function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)
  const {contents, refresh} = useContent();
  const [brainShare, setBrainShare] = useState(false)
  useEffect(()=>{
    refresh();
  },[modalOpen])

  return <div className="bg-gray-100">
    <Sidebar />
    <div className="p-4  md:ml-72 min-h-screen  bg-gray-100 border-2 ">
      <CreateContentModal open={modalOpen} onClose={() => { setModalOpen(false) }} />
      <div className={`${modalOpen ? "hidden" : " flex gap-4 justify-end md:justify-end "}`}>
        <Button className="" onClick={() => { setModalOpen(true) }} variant="primary" title="Add Content" startIcon={<PlusIcon />}></Button>
        {!brainShare && <Button  variant="secondary"  title={"Share Brain"} startIcon={<ShareIcon />}  
         onClick={async () => {
          const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
            share: true
          }, {
            headers: {
              "Authorization": localStorage.getItem("token")
            }
          });
          const shareUrl = `${FE_URL}/share/${response.data.hash}`;
          alert(shareUrl)
          setBrainShare(true)
        }
        }></Button>}
        {
          brainShare && <Button  variant="secondary"  title={"Stop Sharing"} startIcon={<ShareIcon />}  
          onClick={async () => {
            await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
             share: false
           }, {
             headers: {
               "Authorization": localStorage.getItem("token")
             }
           });
           setBrainShare(false)
         }
         }></Button>

        }
      </div>
      <div className="flex gap-5 pt-2 justify-center md:justify-center flex-wrap">
        {contents.map(({ type, title, link, desc, _id},index) => <Card
          type={type} title={title} link={link} desc={desc} _id={_id} key={index} />)}
      </div>
      
    </div>
  </div>

}
