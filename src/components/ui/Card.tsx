
// import axios from "axios";
import { DeleteIcon } from "../../icons/DeleteIcon";
import { DocIcon } from "../../icons/DocIcon";
import { VisitIcon } from "../../icons/VisitIcon";
// import { BACKEND_URL } from "../../config";
import { useContent } from "../../hooks/useContent";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { InstaIcon } from "../../icons/InstaIcon";
// import { useState } from "react";
import {  useEffect } from "react";




interface CardProps {
    _id: string;
    title: string;
    link?: string;
    type: "twitter" | "youtube" | "document" | "instagram",
    desc?: string,
    icon? : boolean
}



export function Card({ title, link, type, desc, _id, icon }: CardProps) {
    const { refresh, HandleDelete,} = useContent()


    useEffect(() => {
        refresh()
    }, [HandleDelete])


    return <div className="" >
        <div className="p-3 bg-white  rounded-xl border-gray-200 md:w-[300px]  min-w-[270px] h-[360px] md:h-96  overflow-hidden flex flex-col border">
            <div className="  flex justify-between ">
                <div className="flex items-center text-md font-medium ">
                    <div className="text-gray-500 pr-2">
                        {type == "document" ? <DocIcon /> : ""}
                        {type == "youtube" ? <YoutubeIcon /> : ""}
                        {type == "twitter" ? <TwitterIcon /> : ""}
                        {type == "instagram" ? <InstaIcon /> : ""}
                    </div>
                    {title}
                </div>
                <div className="flex items-center  ">
                    <div className=" pr-2 text-gray-500 cursor-pointer">
                        <a href={link} target="_blank">
                            <VisitIcon />
                        </a>
                    </div>
                   { icon && <div className="text-gray-500 cursor-pointer " onClick={() => { HandleDelete(_id) }}>
                        <DeleteIcon />
                    </div>
                    }

                </div>

            </div>
            <div className=" pt-1 flex  overflow-hidden items-start border-b rounded w-[260px]">
                {type === "youtube" && <iframe className="  flex justify-center w-full  items-center" src={link?.replace("youtu.be", "www.youtube.com/embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }

                {type === "twitter" && <div className="flex justify-center w-full "> <blockquote className="twitter-tweet flex justify-center items-center overflow-hidden ">
                    <a href={link?.replace("x.com", "twitter.com") + "?ref_src=twsrc%5Etfw"} ></a>
                </blockquote>
                     </div>
                }
                {type == "document" && <div className="text-xl font-semibold"> {link}  </div>}
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
