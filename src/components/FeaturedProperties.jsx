import { motion } from 'framer-motion'
import { MapPin, BedDouble, Bath, Maximize2 } from 'lucide-react'
import { SectionHeader } from './Services'

const properties = [
    {
        image: '/images/property-south-delhi.png',
        location: 'South Delhi',
        type: 'Luxury Apartment',
        beds: 4, baths: 3, sqft: '2,800',
    },
    {
        image: '/images/property-dwarka.jpg',
        location: 'Dwarka Sector 6',
        type: 'Gated Society Flat',
        beds: 3, baths: 2, sqft: '1,650',
    },
    {
        image: '/images/property-gurgaon.png',
        location: 'Gurgaon Sector 47',
        type: 'Builder Floor',
        beds: 4, baths: 3, sqft: '2,600',
    },
    {
        image: '/images/property-noida.jpg',
        location: 'Noida Sector 150',
        type: 'High-Rise Apartment',
        beds: 3, baths: 2, sqft: '1,450',
    },
    {
        image: '/images/property-west-delhi.png',
        location: 'West Delhi',
        type: 'Builder Floor',
        beds: 3, baths: 2, sqft: '1,200',
    },
    {
        image: '/images/property-vasant-kunj.png',
        location: 'Vasant Kunj',
        type: 'Luxury Apartment',
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
