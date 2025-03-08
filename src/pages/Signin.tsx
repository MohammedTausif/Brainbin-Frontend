import { useRef, useState } from "react"
import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Signin() {
    const [demo, setDemo] = useState(false)
   const [loading, setLoading]= useState(false)

    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        try {
            setLoading(true)
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
                username: username,
                password: password,
            })
            setLoading(false)
            const jwt = response.data.token;
            localStorage.setItem("token", jwt)
            navigate("/dashboard")
        } catch (error) {
            setLoading(false)
            console.log("error is :" ,error)
           
        }
    }


    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">

        <div className="bg-white rounded-xl border min-w-w8 p-8 ">
            <h1 className="text-2xl md:text-3xl flex justify-center items-center text-purple-600 pb-2 font-normal">Sign in</h1>
            <Input reference={usernameRef} placeholder="Username" type="text" />
            {/* <div className=" flex justify-center text-[12px] text-red-500">{failMsg}</div> */}
            <Input reference={passwordRef} placeholder="Password" type="password"/>
            <div className="flex justify-center pt-4 ">
                <Button onClick={signin} variant="primary" title="signin" className={`${loading? "cursor-progress bg-purple-500 pointer-events-none" : "cursor-pointer"}`} fullWidth={true} />
            </div>
            <div className="pt-2 flex flex-col justify-center items-center">
                <Button
                    onClick={() => setDemo(!demo)}
                    variant="secondary"
                    title="Demo Credentials"
                />
                {
                    demo && <span
                        className="text-black transition-all">
                        username: test@123 <br />
                        password: test@123
                    </span>
                }
            </div>
        </div>

    </div>

}