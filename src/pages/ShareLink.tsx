import Error from "../components/Error"
import axios from "axios"
import {  useEffect, useState } from "react"
import  {SidebarShare} from "../components/ui/shared/SidebarShare"
import { Card } from "../components/ui/Card"
import {  useParams } from "react-router-dom";
import { UserIcon } from "../icons/UserIcon"
import { BACKEND_URL } from "../config"
interface Content {
  _id: string;
  title: string;
  link?: string;
  type: "twitter" | "youtube" | "document" | "instagram";
  desc? :string;
 
}

export const ShareLink=()=> {

  // const navigate = useNavigate()
  const [content, setContent] =useState<Content[]>([])
  const [username, setUsername] =useState("")
  const{ shareLink }= useParams<{shareLink: string}>()
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true)



  useEffect(()=>{
    const fetchData=async ()=>{
      try{
      const response =await axios.get(`${BACKEND_URL}/api/v1/brain/${shareLink}`,{
       data: { hash :shareLink },
      })
      setLoading(false)
      setContent(response?.data.content)
      setUsername(response?.data.username)
      setError(false)
      console.log("response :", response.data.username)
        }catch(error){
        console.log("error fetching data",error)
        setLoading(false)
        setError(true)
      
      }
    };
    fetchData();
  },[shareLink])
  if(loading){
    return<>
    <div className="h-screen w-screen flex justify-center items-center bg-purple-50">
      <h1 className="text-2xl md:text-4xl text-purple-800 font-semibold">Loading....</h1>
    </div>
    </>
  }

  if(error){
    return <Error/>
  }

  return <div className="w-full bg-gray-100">
   <SidebarShare/>
   <div className="p-4  ml-0 md:ml-72 min-h-screen bg-gray-100 border-2 "> 
      <div className="text-md flex flex-wrap text-black  w-80 justify-start font-semibold items-center gap-1 pl-20 md:pl-2 pt-4">  <UserIcon/>: {username.toLocaleUpperCase()} </div> 
     <div className="flex gap-5 pt-10 justify-center flex-wrap">
       {
       content.map(({_id, title, type, desc, link}) => <Card _id={_id} title={title} type={type} desc={desc} link={link} key={_id} {...content} />)}
     </div>
    
   </div>
 </div>
}
  

