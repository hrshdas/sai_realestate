import { motion } from 'framer-motion'
import { Home, Building2, Palette } from 'lucide-react'

const services = [
    {
        icon: Home,
        title: 'Residential Construction',
        description: 'Homes built to last a lifetime — from foundation to finish, crafted for the way you live.',
    },
    {
        icon: Building2,
        title: 'Commercial Projects',
        description: 'Inspiring commercial environments that speak authority and drive business forward.',
    },
    {
        icon: Palette,
        title: 'Interior Design',
        description: 'Curated interiors that blend timeless aesthetics with purposeful functionality.',
    },
]

export function SectionHeader({ tagline, title, subtitle }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
        >
            {tagline && <p className="eyebrow mb-5">{tagline}</p>}
            <h2 className="luxury-heading text-5xl sm:text-6xl text-white mb-6">{title}</h2>
            <div className="gold-divider mx-auto w-32">
                <div className="gold-divider-dot" />
            </div>
            {subtitle && (
                <p className="text-muted mt-6 max-w-lg mx-auto leading-relaxed">{subtitle}</p>
            )}
        </motion.div>
    )
}

export default function Services() {
    return (
        <section id="services" className="section-padding px-6 bg-[#0E0E0E]">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    tagline="What We Build"
                    title={<>What We <em className="text-[#C9A227] not-italic">Offer</em></>}
                    subtitle="From residential dream homes to landmark commercial spaces — precision and elegance define every project."
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-px bg-white/5">
                    {services.map((service, i) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="group bg-[#0E0E0E] p-10 flex flex-col hover:bg-[#141414] transition-colors duration-500 cursor-default"
                            >
                                <div className="mb-8">
                                    <div className="w-10 h-10 flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-[#C9A227] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-serif text-2xl font-semibold text-white mb-3 group-hover:text-[#C9A227] transition-colors duration-400 leading-snug">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted leading-relaxed text-sm">{service.description}</p>
                                </div>
                                <div className="mt-auto pt-6 border-t border-white/5">
                                    <span className="text-[#C9A227] text-xs tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase">
                                        Learn more →
                                    </span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
