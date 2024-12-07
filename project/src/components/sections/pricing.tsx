import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Pricing() {
  const features = [
    'Full Normal Access',
    'Immediate Support',
    'Games up to 500 players'
  ]

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Access Plan
        </motion.h2>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl p-8"
          >
            <h3 className="text-xl font-bold mb-4 text-white">NORMAL ACCESS</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">500 Robux</span>
            </div>
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-300">
                  <Shield className="h-5 w-5 text-white mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="https://www.roblox.com/game-pass/984107242/Planet-Nebula"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="black" className="w-full">Get Access</Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}