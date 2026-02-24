import { motion } from 'framer-motion'
import { MapPin, BedDouble, Bath, Maximize2 } from 'lucide-react'
import { SectionHeader } from './Services'

const properties = [
    {
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
        location: 'South Delhi',
        type: 'Luxury Apartment',
        price: '₹3.2 Cr',
        beds: 4, baths: 3, sqft: '2,800',
    },
    {
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
        location: 'Dwarka Sector 6',
        type: 'Gated Society Flat',
        price: '₹1.45 Cr',
        beds: 3, baths: 2, sqft: '1,650',
    },
    {
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
        location: 'Gurgaon Golf Course Road',
        type: 'Premium Villa',
        price: '₹4.8 Cr',
        beds: 5, baths: 4, sqft: '4,200',
    },
    {
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
        location: 'Noida Sector 150',
        type: 'High-Rise Apartment',
        price: '₹1.2 Cr',
        beds: 3, baths: 2, sqft: '1,450',
    },
    {
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
        location: 'West Delhi',
        type: 'Builder Floor',
        price: '₹95 Lakhs',
        beds: 3, baths: 2, sqft: '1,200',
    },
    {
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
        location: 'Vasant Kunj',
        type: 'Luxury Apartment',
        price: '₹2.1 Cr',
        beds: 3, baths: 3, sqft: '2,100',
    },
]

export default function FeaturedProperties() {
    return (
        <section id="properties" className="section-padding px-6 bg-[#090909]">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    tagline="Featured Listings"
                    title={<>Premium <em className="text-[#C9A227] not-italic">Properties</em></>}
                    subtitle="Handpicked luxury properties across Delhi NCR — verified listings, transparent pricing, complete legal support."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
                    {properties.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                            className="group bg-[#0E0E0E] flex flex-col hover:bg-[#141414] transition-colors duration-500 cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-[4/3]">
                                <img
                                    src={p.image}
                                    alt={p.location}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0"
                                />
                                {/* Price badge */}
                                <div className="absolute top-4 right-4 bg-[#C9A227] px-4 py-1.5">
                                    <span className="text-black text-sm font-bold tracking-wide">{p.price}</span>
                                </div>
                                {/* Gold overlay on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: 'linear-gradient(to top, rgba(201,162,39,0.3) 0%, transparent 60%)' }}
                                />
                            </div>

                            {/* Card body */}
                            <div className="p-7 flex flex-col flex-1">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <p className="eyebrow text-[#C9A227]/70 mb-1">{p.type}</p>
                                        <h3 className="font-serif text-xl text-white group-hover:text-[#C9A227] transition-colors duration-400">
                                            {p.location}
                                        </h3>
                                    </div>
                                    <MapPin className="w-4 h-4 text-[#C9A227]/40 mt-1 shrink-0" strokeWidth={1.5} />
                                </div>

                                <div className="flex items-center gap-6 mt-auto pt-5 border-t border-white/6">
                                    <span className="flex items-center gap-1.5 text-white/35 text-xs">
                                        <BedDouble className="w-3.5 h-3.5" strokeWidth={1.5} />
                                        {p.beds} Beds
                                    </span>
                                    <span className="flex items-center gap-1.5 text-white/35 text-xs">
                                        <Bath className="w-3.5 h-3.5" strokeWidth={1.5} />
                                        {p.baths} Baths
                                    </span>
                                    <span className="flex items-center gap-1.5 text-white/35 text-xs">
                                        <Maximize2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                                        {p.sqft} sq.ft
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-14"
                >
                    <a href="#contact" className="btn-gold">
                        Enquire About a Property
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
