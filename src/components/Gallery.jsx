import { motion } from 'framer-motion'
import { SectionHeader } from './Services'

const galleryImages = [
    { src: '/images/construction-site.jpg', label: 'Under Construction', location: 'New Delhi' },
    { src: '/images/construction-site-2.png', label: 'Site Progress', location: 'New Delhi' },
    { src: '/images/construction-site-3.png', label: 'Building Structure', location: 'New Delhi' },

    { src: '/images/rebar-construction.jpg', label: 'Structural Framework', location: 'New Delhi' },
    { src: '/images/interior-living.png', label: 'Luxury Interior', location: 'New Delhi' },
    { src: '/images/interior-lounge.png', label: 'Premium Lounge', location: 'New Delhi' },
    { src: '/images/interior-dining.jpg', label: 'Elegant Dining', location: 'New Delhi' },
    { src: '/images/interior-sitting.png', label: 'Designer Sitting Room', location: 'New Delhi' },
    { src: '/images/interior-corridor.png', label: 'Grand Corridor', location: 'New Delhi' },
    { src: '/images/interior-lounge2.jpg', label: 'Luxury Club Lounge', location: 'New Delhi' },
    { src: '/images/interior-marble.jpg', label: 'Marble Entertainment Wall', location: 'New Delhi' },
    { src: '/images/interior-marble2.png', label: 'Modern TV Unit', location: 'New Delhi' },
    { src: '/images/interior-bedroom.png', label: 'Signature Bedroom', location: 'New Delhi' },
    { src: '/images/interior-bedroom2.png', label: 'Botanical Bedroom Suite', location: 'New Delhi' },
    { src: '/images/interior-bar.jpg', label: 'Crimson Bar & Lounge', location: 'New Delhi' },
    { src: '/images/interior-entrance.jpg', label: 'Royal Entrance', location: 'New Delhi' },

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
