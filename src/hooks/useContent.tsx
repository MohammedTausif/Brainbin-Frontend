import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";




export function useContent() {
    const [contents, setContents] = useState([])
    const [name, setName] = useState("")

    async function refresh() {
        await axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then((response) => {
            setContents(response.data.content)
            setName(response.data.content[0].userId.username)
            })
    }
    const deleteContent = async (id: string) => {
        try {
            const response = await axios.delete(`${BACKEND_URL}/api/v1/content`, {
                data: { contentId: id },
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            return response.data
        } catch (error) {
            console.error("content delete error", error)
        }

    }
    const HandleDelete = async (id: string) => {
      try{

        await deleteContent(id)
        //@ts-ignore
        const updatedContent = contents.filter((content) => content._id !== id)
         setContents(updatedContent)
         console.log("content deleted successfully")
      }catch(e){
        console.error("error while deleting content", e )

      }
    }


    useEffect(() => {
        refresh()
        let interval = setInterval(() => {
            refresh()
        }, 10 * 1000);
        return () => {
            clearInterval(interval)
        }
    },)
    return { contents, refresh, HandleDelete, name }
}