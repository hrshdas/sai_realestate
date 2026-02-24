import { motion } from 'framer-motion'
import PropertyCard from './PropertyCard'

const properties = [
    {
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
        price: '₹4.5 Cr',
        location: 'Bandra, Mumbai',
        title: 'Skyline Luxury Penthouse',
        description: 'A magnificent 4BHK penthouse with panoramic sea views, private terrace, and state-of-the-art amenities in the heart of Bandra.',
    },
    {
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
        price: '₹8.2 Cr',
        location: 'Whitefield, Bangalore',
        title: 'The Grand Villa Estate',
        description: 'Sprawling 6BHK villa with private pool, landscaped gardens, home theatre, and premium Italian marble interiors on 1 acre.',
    },
    {
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
        price: '₹2.8 Cr',
        location: 'Gurgaon, Delhi NCR',
        title: 'Prestige Heights Apartment',
        description: 'Ultra-modern 3BHK in an iconic high-rise with rooftop infinity pool, concierge services, and smart home automation.',
    },
]

export default function FeaturedProperties() {
    return (
        <section id="properties" className="py-28 px-6 bg-[#111111]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#C9A227] text-xs font-semibold tracking-[0.35em] uppercase mb-4">
                        ✦ Curated Collection ✦
                    </p>
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
                        Featured <span className="text-[#C9A227]">Properties</span>
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-16 bg-[#C9A227]/40" />
                        <div className="h-1 w-12 bg-[#C9A227]" />
                        <div className="h-px w-16 bg-[#C9A227]/40" />
                    </div>
                    <p className="text-gray-400 max-w-xl mx-auto mt-6 leading-relaxed">
                        Explore our handpicked selection of the most prestigious properties across India's prime locations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property, index) => (
                        <PropertyCard key={index} {...property} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mt-14"
                >
                    <a
                        href="#"
                        className="inline-flex items-center gap-3 border border-[#C9A227] text-[#C9A227] px-10 py-4 text-sm font-bold tracking-widest hover:bg-[#C9A227] hover:text-black transition-all duration-300"
                    >
                        VIEW ALL PROPERTIES
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
