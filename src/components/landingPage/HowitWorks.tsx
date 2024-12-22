import { motion } from 'framer-motion'
import Macbook from './Macbook'

const steps = [
  { title: 'Sign Up', description: 'Create your account in seconds' },
  { title: 'Save Content', description: 'Use our browser extension or mobile app to save content with one click' },
  { title: 'Share', description: 'Share saved content with others, and easily revoke access' },
  { title: 'Access Anywhere', description: 'Your second brain is always with you, on any device' },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-purple-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How Second Brain Works
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Macbook/>
          </motion.div>
          <div className="md:w-1/2 md:pl-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="mb-6 flex items-start"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">{step.title}</h3>
                  <p className="text-purple-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
