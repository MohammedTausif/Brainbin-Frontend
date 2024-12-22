import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { useNavigate } from 'react-router-dom'
import { BrainPattern } from '../../icons/BrainPattern';
import { StartIcon } from '../../icons/StartIcon';
import { SigninIcon } from '../../icons/SigninIcon';

export default function Hero() {
    const navigate = useNavigate();
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-purple-50">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-purple-500 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'url("/brain-pattern.svg")',
            backgroundSize: '100px 100px',
          }}
        />
      </div>
      <div className=" relative z-10 text-center px-4">
        
        <motion.h1 
          className=" text-5xl md:text-7xl font-bold text-purple-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} 
        >
         <div className='flex justify-center items-center flex-wrap gap-2'>
           <BrainPattern/> Your Digital Second Brain
          </div>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-purple-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Save, organize, and access your digital life with ease.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className='flex justify-center gap-5'>
            <Button 
            title='Get started' 
            variant='primary' 
            onClick={()=> {navigate("/signup")}}
            startIcon={<StartIcon/>}
            />
            <Button 
            title="Login here"
            variant='secondary' 
            startIcon={<SigninIcon/>}
            onClick={()=> {navigate("/signin")}}
            />
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}
