import { motion } from 'framer-motion'
import { SectionHeader } from './Services'

const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop', label: 'Skyline Penthouse', location: 'Mumbai' },
    { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop', label: 'Grand Villa Estate', location: 'Gurgaon' },
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', label: 'Modern Heights', location: 'Pune' },
    { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop', label: 'Coastal Bungalow', location: 'Goa' },
    { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop', label: 'Premium Interior', location: 'New Delhi' },
    { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop', label: 'Commercial Tower', location: 'Bangalore' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop', label: 'Hillside Retreat', location: 'Lonavala' },
    { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop', label: 'Urban Suite', location: 'Hyderabad' },
]

export default function Gallery() {
    return (
        <section id="gallery" className="section-padding px-6 bg-[#090909]">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    tagline="Portfolio"
                    title={<>Our <em className="text-[#C9A227] not-italic">Work</em></>}
                    subtitle="A curated selection of completed projects — where every space tells its own story."
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                    {galleryImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.6, delay: i * 0.06 }}
                            className="group relative overflow-hidden aspect-square cursor-pointer"
                        >
                            {/* Image with zoom */}
                            <img
                                src={img.src}
                                alt={img.label}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[15%] group-hover:grayscale-0"
                            />

                            {/* Gold gradient overlay */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: 'linear-gradient(to top, rgba(201,162,39,0.55) 0%, rgba(0,0,0,0.45) 50%, transparent 100%)',
                                }}
                            />

                            {/* Caption slides up */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <p className="text-white text-sm font-semibold drop-shadow">{img.label}</p>
                                <p className="text-[#f5d97a] text-[10px] tracking-widest uppercase mt-0.5 drop-shadow">{img.location}</p>
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
                    <a href="#contact" className="btn-outline">
                        Discuss Your Project
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
