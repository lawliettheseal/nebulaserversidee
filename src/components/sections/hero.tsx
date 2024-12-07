import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <img 
            src="https://cdn.discordapp.com/icons/1272765853745811469/e687515cc70dc6ffef9910d5304331ac.webp?size=512&format=webp"
            alt="Nebula Logo"
            className="w-32 h-32 rounded-full ring-4 ring-white/30 animate-glow"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-6xl md:text-7xl font-bold mb-6 text-white"
        >
          Nebula Admin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Experience unlimited power with our premium admin solution.
          Join thousands of satisfied users today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a 
            href="https://discord.gg/HfkfcHGuvT"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <MessageSquare className="mr-2 h-5 w-5" />
              <span>Join Discord</span>
            </Button>
          </a>
          <a 
            href="https://www.roblox.com/game-pass/984107242/Planet-Nebula"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Button variant="black" size="lg" className="w-full sm:w-auto">
              <span>Get Access</span>
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}