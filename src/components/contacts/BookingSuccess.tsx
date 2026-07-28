import { memo } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export const BookingSuccess = memo(function BookingSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="border border-cream/10 p-10 text-center"
      role="status"
    >
      <CheckCircle size={32} className="text-cream/30 mx-auto mb-4" aria-hidden="true" />
      <h3 className="text-sm font-medium text-cream mb-2 uppercase tracking-[0.15em]">Заявка отправлена</h3>
      <p className="text-xs text-cream/30">Свяжемся в ближайшее время.</p>
    </motion.div>
  )
})
