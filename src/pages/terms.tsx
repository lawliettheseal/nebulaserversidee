import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { GradientBackground } from '@/components/ui/gradient-background'
import { Shield, AlertTriangle, Lock, Ban, Gamepad2, MessageSquare } from 'lucide-react'

export default function Terms() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const terms = [
    {
      title: 'Server Usage',
      icon: Shield,
      content: 'Don\'t shutdown if not needed (use it when the server is like destroyed)'
    },
    {
      title: 'Behavior Guidelines',
      icon: MessageSquare,
      content: 'Try to be calm when the owner is in the game'
    },
    {
      title: 'External Tools',
      icon: Lock,
      content: 'No externals'
    },
    {
      title: 'Game Protection',
      icon: Shield,
      content: 'No backdooring our games'
    },
    {
      title: 'Content Guidelines',
      icon: AlertTriangle,
      content: 'No NSFW Scripts'
    },
    {
      title: 'Game Integrity',
      icon: Gamepad2,
      content: 'No teleporting people to other games'
    },
    {
      title: 'Moderation',
      icon: Ban,
      content: 'No mass banning (you can ban but not like abusively)'
    },
    {
      title: 'Privacy',
      icon: Lock,
      content: 'No snitching like saying the game is infected'
    },
    {
      title: 'Server Stability',
      icon: Shield,
      content: 'No extreme abuse (like coolkidd decal spam, unanchoring everything)'
    }
  ]

  return (
    <GradientBackground className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <motion.div {...fadeInUp}>
          <motion.h1 
            className="text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white">Terms of Service</span>
          </motion.h1>

          <Card className="backdrop-blur-xl bg-black/40">
            <div className="p-8">
              <div className="space-y-8">
                {terms.map((term, index) => (
                  <motion.div
                    key={term.title}
                    className="glass-card p-6 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-lg bg-white/10">
                        <term.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{term.title}</h3>
                    </div>
                    <p className="text-gray-300">{term.content}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10"
                {...fadeInUp}
                transition={{ delay: 0.6 }}
              >
                <p className="text-gray-300 leading-relaxed">
                  Breaking our TOS will result in a warning or blacklist depending on the severity.
                </p>
              </motion.div>

              <motion.p 
                className="mt-8 text-sm text-gray-400 text-center"
                {...fadeInUp}
                transition={{ delay: 0.7 }}
              >
                These terms are subject to change at any time. It is your responsibility to check for updates to these terms regularly.
              </motion.p>
            </div>
          </Card>
        </motion.div>
      </div>
    </GradientBackground>
  )
}