import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/showcases', label: 'Showcases' },
    { path: '/terms', label: 'Terms' },
    { path: '/policy', label: 'Policy' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <motion.img
                src="https://cdn.discordapp.com/icons/1272765853745811469/e687515cc70dc6ffef9910d5304331ac.webp?size=512&format=webp"
                alt="Nebula Logo"
                className="h-10 w-10 rounded-full ring-2 ring-white/20"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              />
              <motion.span
                className="text-xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
              >
                Nebula
              </motion.span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div key={item.path} whileHover={{ scale: 1.05 }}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://discord.gg/HfkfcHGuvT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="group">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    <span>Join Discord</span>
                  </Button>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://www.roblox.com/game-pass/984107242/Planet-Nebula"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="black" className="group">
                    <span>Get Access</span>
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl"
          >
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://discord.gg/HfkfcHGuvT"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4"
              >
                <Button variant="outline" className="w-full group">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  <span>Join Discord</span>
                </Button>
              </a>
              <a
                href="https://www.roblox.com/game-pass/984107242/Planet-Nebula"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4"
              >
                <Button variant="black" className="w-full group">
                  <span>Get Access</span>
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}