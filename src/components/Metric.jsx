import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const Metric = ({ value, label, unit = '' }) => {
  return (
    <motion.div
      className="metric"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-white space-x-1 gradient-text">
        <CountUp end={value} duration={3} />
        <span className="text-base text-white">{unit}</span>
      </h2>
      <p className="text-lg text-gray-300">{label}</p>
    </motion.div>
  )
}

export default Metric
