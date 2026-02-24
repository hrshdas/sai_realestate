import { motion } from 'framer-motion'
import { Award, Users, Home, TrendingUp } from 'lucide-react'

const stats = [
    { value: '12+', label: 'Years Experience' },
    { value: '500+', label: 'Properties Sold' },
    { value: '1200+', label: 'Happy Clients' },
    { value: '98%', label: 'Client Satisfaction' },
]

export default function About() {
    return (
        <section id="about" className="py-28 px-6 bg-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="relative"
                >
                    <img
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                        alt="Luxury interior"
                        className="w-full h-[560px] object-cover"
                    />
                    <div className="absolute -bottom-8 -right-8 w-64 bg-[#C9A227] p-6 hidden lg:block">
                        <p className="font-serif text-4xl font-bold text-black">12+</p>
                        <p className="text-black/70 text-sm font-medium mt-1">Years of Excellence in Premium Real Estate</p>
                    </div>
                    <div className="absolute inset-0 border border-[#C9A227]/20 translate-x-4 translate-y-4 -z-10 hidden lg:block" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <p className="text-[#C9A227] text-xs font-semibold tracking-[0.35em] uppercase mb-4">✦ About Us ✦</p>
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                        India's Most Trusted{' '}
                        <span className="text-[#C9A227] italic">Luxury Real Estate</span>{' '}
                        Partner
                    </h2>
                    <div className="h-0.5 w-16 bg-[#C9A227] mb-8" />

                    <p className="text-gray-400 leading-relaxed mb-5">
                        At SAI Estate, we believe that finding a home is one of life's most profound experiences. With over 12 years of expertise in India's premium property market, we curate exceptional spaces that match your lifestyle aspirations.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-10">
                        Our team of seasoned professionals combines deep market knowledge with a genuine passion for luxury real estate, ensuring that every transaction is seamless, transparent, and truly rewarding.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="text-center lg:text-left"
                            >
                                <p className="font-serif text-3xl font-bold text-[#C9A227]">{stat.value}</p>
                                <p className="text-gray-500 text-xs mt-1 tracking-wide">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 bg-[#C9A227] hover:bg-[#a07d1a] text-black font-bold px-10 py-4 text-sm tracking-widest transition-all duration-300"
                    >
                        DISCOVER MORE
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
