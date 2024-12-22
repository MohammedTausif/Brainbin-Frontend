import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"
import { Link } from "react-router-dom"

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>()
    const passwordRef = useRef<HTMLInputElement>()
    const navigate = useNavigate()
    
    async function signup(){
        if(!usernameRef.current?.value){
            alert("Please Enter username")
            return
        }
        if(!passwordRef.current?.value){
            alert(" Please Enter Password")
            return
        }
        else{

            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;
            await axios.post(`${BACKEND_URL}/api/v1/signup`,{
                username,
                password
            })
            navigate("/signin")
            alert("You have signed up! ")
            
        }
    }

  return  <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-lg border min-w-48 p-8">
            <h1 className="flex justify-center text-2xl md:text-3xl text-purple-600 font-normal items-center pb-2">Sign up</h1>
            <Input reference={usernameRef} placeholder="username"  type="text"/>
            <Input reference={passwordRef} placeholder="password" type="password" />
            <div className="flex justify-center pt-4" >
                <Button onClick={signup} variant="primary" title="Signup" fullWidth={true} loading={false} />
            </div>
            <Link to="/signin" className="underline text-blue-600 text-xs flex justify-end mt-1 cursor-pointer">Already a user Please Signin</Link>
        </div>
      
    </div>
  
}

