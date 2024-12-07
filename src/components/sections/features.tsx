import { motion } from 'framer-motion'
import { Shield, Lock, Zap } from 'lucide-react'

export function Features() {
  const features = [
    { icon: Shield, title: 'Secure', desc: 'Advanced security measures' },
    { icon: Lock, title: 'Private', desc: 'Your data stays protected' },
    { icon: Zap, title: 'Fast', desc: 'Lightning-fast performance' }
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
          Premium Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 rounded-xl hover:translate-y-[-8px] transition-all duration-300"
            >
              <feature.icon className="h-12 w-12 text-white mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}