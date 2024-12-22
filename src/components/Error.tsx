'use client'

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Custom404() {
  useEffect(() => {
    document.body.style.backgroundColor = '#000'
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-600 text-white p-4">
      <div className="text-center">
        <motion.h1 
          className="text-9xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.div
          className="text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Oops! Page not found
        </motion.div>
        <motion.p 
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          The page you are looking for might have been removed, 
          had its name changed, or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="bg-white text-purple-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            Go Home
          </Link>
        </motion.div>
      </div>
      <div className="absolute inset-0 overflow-hidden z-[-1]">
        <div className="glitch-effect"></div>
      </div>
    </div>
  )
}

