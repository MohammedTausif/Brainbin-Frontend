// import axios from "axios";
import { DocIcon } from "../../../icons/DocIcon";
import { InstaIcon } from "../../../icons/InstaIcon";
import { TwitterIcon } from "../../../icons/TwitterIcon";
import { VisitIcon } from "../../../icons/VisitIcon";
import { YoutubeIcon } from "../../../icons/YoutubeIcon";


interface CardProps {
    _id: string;
    title: string;
    link?: string;
    type: "twitter" | "youtube" | "document" | "instagram",
    desc?: string
}




export function ViewerCard({ title, link, type, desc, }: CardProps) {

    return <div className="" >
        <div className="p-4 bg-white  rounded-xl border-gray-200 max-w-[300px] min-w-[280px] h-96  overflow-hidden flex flex-col border">
            <div className="flex justify-between ">
                <div className="flex items-center text-md font-medium w-full">
                    <div className="text-gray-500 pr-2">
                        
                        {type == "document" ? <DocIcon/> : ""}
                        {type == "youtube" ? <YoutubeIcon/> : ""}
                        {type == "twitter" ? <TwitterIcon/> : ""}
                        {type == "instagram" ? <InstaIcon/> : ""}
                        
                    </div>
                    {title}
                </div>
                <div className="flex items-center  ">
                    <div className=" pr-2 text-gray-500 cursor-pointer">
                        <a href={link} target="_blank">
                            <VisitIcon />
                        </a>
                    </div>


                </div>

            </div>
            <div className=" pt-1 flex  overflow-hidden items-start border-b rounded">
                {type === "youtube" && <iframe className="w-full flex justify-center  items-center" src={link?.replace("youtu.be", "www.youtube.com/embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type === "twitter" && <div> <blockquote className="twitter-tweet flex justify-center items-center overflow-hidden">
                    <a href={link?.replace("x.com", "twitter.com") + "?ref_src=twsrc%5Etfw"} ></a>
                </blockquote>
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>  </div>
                }
                {type == "document" && <div className="text-xl font-semibold"> {link} {desc} </div>}
                {type == "instagram" && <blockquote className="instagram-media flex justify-center items-center overflow-hidden " data-instgrm-captioned data-instgrm-permalink={link?.replace("web_copy_link", "embed&amp;utm_campaign=loading")} data-instgrm-version="14" > <a href={link?.replace("web_copy_link", "embed&amp;utm_campaign=loading")} target="_blank"> </a>
                    <a href={link?.replace("web_copy_link", "embed&amp;utm_campaign=loading")} target="_blank"> </a>
                </blockquote>
                }
            </div>

            <div className="pt-2 w-[100%] flex justify-start ">
                <div className="flex ">
                    {desc}
                </div>
            </div>

        </div >
    </div >

}
