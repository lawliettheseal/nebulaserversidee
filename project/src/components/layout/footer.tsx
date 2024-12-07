import { Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.img
            src="https://cdn.discordapp.com/icons/1272765853745811469/e687515cc70dc6ffef9910d5304331ac.webp?size=512&format=webp"
            alt="Nebula Logo"
            className="h-16 w-16 rounded-full ring-2 ring-white/20"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          
          <motion.div 
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Shield className="h-5 w-5 text-white" />
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Nebula Admin. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}