import { memo, type ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'

interface AnimatedBlockProps {
  children: ReactNode
  className?: string
  animation?: Variants
}

const defaultAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInUp = defaultAnimation

export const AnimatedBlock = memo(function AnimatedBlock({
  children,
  className = '',
  animation = defaultAnimation,
}: AnimatedBlockProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animation}
      className={className}
    >
      {children}
    </motion.div>
  )
})
