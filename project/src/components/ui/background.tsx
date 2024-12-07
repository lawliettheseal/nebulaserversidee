import { cn } from '@/lib/utils'

interface BackgroundProps {
  className?: string
  children: React.ReactNode
}

export function Background({ className, children }: BackgroundProps) {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
      </div>
      <div className={cn("relative", className)}>
        {children}
      </div>
    </div>
  )
}