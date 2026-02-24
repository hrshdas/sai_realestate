import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'

export default function PropertyCard({ image, price, location, title, description, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden glass-card flex flex-col cursor-pointer"
        >
            <div className="relative overflow-hidden h-64">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#C9A227] text-black text-xs font-bold px-3 py-1.5 tracking-widest">
                    FOR SALE
                </div>
            </div>

            <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-between mb-3">
                    <p className="text-[#C9A227] font-serif text-2xl font-bold">{price}</p>
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                        {location}
                    </div>
                </div>

                <h3 className="font-serif text-xl text-white font-semibold mb-2 group-hover:text-[#C9A227] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{description}</p>

                <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-[#C9A227] text-sm font-semibold tracking-wider border-b border-[#C9A227]/40 pb-1 w-fit group/btn"
                >
                    VIEW DETAILS
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </motion.button>
            </div>

            <div className="absolute inset-0 border border-[#C9A227]/0 group-hover:border-[#C9A227]/30 transition-all duration-500 pointer-events-none" />
        </motion.div>
    )
}
