import { useRef, useState } from "react"
import { CrossIcon } from "../../icons/CrossIcon";
import { Input } from './Input';
import { Button } from "./Button";
import { BACKEND_URL } from "../../config";
import axios from "axios";




enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",
    Document = "document",
    Instagram = "instagram"
}

export function CreateContentModal({ open, onClose }: any) {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const descRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const desc = descRef.current?.value;
       const addResponse = axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type,
            desc,
        }, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        )
        console.log("added content response :" , addResponse)
        onClose();
    }

    return <div>

        {open && <div>
            <div className={` w-screen h-screen bg-slate-600  fixed top-0  left-[100%-288px]  opacity-60 flex justify-center  }`}>

            </div>
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center ">
                <div className="flex flex-col justify-center">
                    <span className="bg-white flex flex-col left-[10%] md:left-[50%]  md:justify-center  opacity-100 p-4 rounded-xl  fixed min-h-[350px] min-w-[270px]">
                        <h1 className="flex justify-center text-lg font-normal text-purple-600">Add Content</h1>
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer ">
                                <CrossIcon />
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col justify-center items-center">
                            <Input reference={titleRef} placeholder={"Title"} />
                            <Input reference={linkRef} placeholder={"Link"} />
                            <Input reference={descRef} placeholder={"Enter text"} />
                        </div>
                        <div>
                            <h1 className="text-gray-400">Type</h1>

                            <div className="flex justify-center flex-wrap gap-1 pb-1">
                              
                                <Button title="Youtube" variant={`${type == "youtube" ? "primary" : "secondary"}`} onClick={() => {
                                    setType(ContentType.Youtube)
                                }}></Button>
                                
                                <Button title="Twitter" variant={`${type == "twitter"? "primary" : "secondary"}`} onClick={() => {
                                    setType(ContentType.Twitter)
                                }}></Button> 
                
                                <Button title="Docx" variant={`${type == "document" ? "primary" : "secondary"}`} onClick={() => {
                                    setType(ContentType.Document)
                                }} ></Button>

                                 <Button title="Insta" variant={`${type == "instagram" ? "primary" : "secondary"}`} onClick={() => {
                                    setType(ContentType.Instagram)
                                }} ></Button> 

                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button onClick={addContent} variant={"primary"} title="Submit" />
                        </div>
                    </span>
                </div>

            </div>

        </div>}
    </div>

}

