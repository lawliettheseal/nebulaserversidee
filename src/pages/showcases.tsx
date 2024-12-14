import { motion } from 'framer-motion';
import { Play, Star, Eye, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GradientBackground } from '@/components/ui/gradient-background';
import { useState } from 'react';

interface Showcase {
  title: string;
  thumbnail: string;
  duration: string;
  creator: string;
  views: string;
  link: string;
  badge: string;
  type: string;
  description: string;
  date: string;
}

const showcases: Showcase[] = [
  {
    title: '*FE* Showcasing Nebula Admin serverside',
    thumbnail: 'https://i.ytimg.com/vi/OUb8neeOLT0/hqdefault.jpg?sqp=-oaymwEmCMQBEG5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDzIC03muBirR2BYz_7sq0lW9P-6A',
    duration: '1:25',
    creator: 'CrimsonsKryptonite',
    views: '60+',
    link: 'https://www.youtube.com/watch?v=OUb8neeOLT0',
  },
  {
    title: 'Nebula Admin SS | Showcase',
    thumbnail: 'https://i.ytimg.com/vi/CFoSiXYZASU/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAClgWKAgwIABABGD8gVChlMA8=&rs=AOn4CLDrrmemrFFoSZ89QGFfMNtwjfxF6A',
    duration: '6:21',
    creator: 'ombrer_20',
    views: '90+',
    link: 'https://www.youtube.com/watch?v=CFoSiXYZASU',
  },
  {
    title: 'Roblox Showcase: NEBULA ADMIN 👑︱Roblox Exploiting #11',
    thumbnail: 'https://i.ytimg.com/vi/pj6eT5_yyVE/hqdefault.jpg?sqp=-oaymwEmCMQBEG5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDr50ZKlLSS2T8FjdSFkc_2j45pSw',
    duration: '5:23',
    creator: 'c00lkidd 🅥',
    views: '200+',
    link: 'https://www.youtube.com/watch?v=pj6eT5_yyVE',
  },
  {
    title: 'Nebula Serverside Showcase │Trampoline game Trolling │',
    thumbnail: 'https://i.ytimg.com/vi/44mObnwaWIg/hqdefault.jpg',
    duration: '3:11',
    creator: 'Developeracces',
    views: '100+',
    link: 'https://www.youtube.com/watch?v=ZQ_ZfE-7l_Y',
  },
];

export default function Showcases() {
  const [selectedShowcase, setSelectedShowcase] = useState<Showcase | null>(null);

  const closeModal = () => setSelectedShowcase(null);

  return (
    <GradientBackground>
      <div className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-5xl sm:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="gradient-text">Featured Showcases</span>
            </motion.h1>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Experience the power of Torrent through our community showcases.
              Join thousands of users already enjoying unlimited possibilities.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {showcases.map((showcase, index) => (
              <motion.div
                key={showcase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="overflow-hidden group backdrop-blur-xl bg-black/40 cursor-pointer"
                  onClick={() => setSelectedShowcase(showcase)}
                >
                  <div className="relative aspect-video">
                    <img
                      src={showcase.thumbnail}
                      alt={showcase.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-3 right-3 bg-black/85 px-2 py-1 rounded-full flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-green-400" />
                      <span className="text-sm">{showcase.duration}</span>
                    </div>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/50 backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Button size="lg" className="group">
                        <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                        Watch Video
                      </Button>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                        {showcase.creator}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                        {showcase.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 line-clamp-2 gradient-text">
                      {showcase.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center text-green-400">
                          <Eye className="h-4 w-4 mr-1" />
                          {showcase.views}
                        </span>
                        <span className="flex items-center text-green-400">
                          <Star className="h-4 w-4 mr-1" />
                          {showcase.badge}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="group">
                        Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {selectedShowcase && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full glass-card p-6 rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video mb-6">
              <iframe
                src={selectedShowcase.link.replace('watch?v=', 'embed/')}
                title={selectedShowcase.title}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 gradient-text">{selectedShowcase.title}</h2>
            <p className="text-gray-300 mb-6">{selectedShowcase.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-green-400">{selectedShowcase.creator}</span>
                <span className="text-gray-400">{selectedShowcase.date}</span>
              </div>
              <Button onClick={closeModal}>Close</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </GradientBackground>
  );
}
