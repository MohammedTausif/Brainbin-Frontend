import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { BACKEND_URL } from '../../config'
import axios from 'axios'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'


export default function SignUp() {
    const navigate = useNavigate()
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    async function HandleSignup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
            username,
            password
        })
        alert("you have signed up")
        navigate("/signin")
    }
    return (
        <section className="py-20 bg-purple-100">
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="p-5">
                        <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">Join Second Brain</h2>
                        <form className="space-y-4">
                            <div>
                                <Input reference={usernameRef} type="email" placeholder="Username" className='w-full' />
                            </div>
                            <div>
                                <Input reference={passwordRef} type="password" placeholder="Password" className='w-full' />
                            </div>
                            <div className='flex justify-center '>
                                <Button title="submit" variant='primary' onClick={HandleSignup} />
                            </div>

                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}