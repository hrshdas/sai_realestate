import { motion } from 'framer-motion'
import { SectionHeader } from './Services'

const stats = [
    { value: '12+', label: 'Years of Excellence', detail: 'Deep expertise across residential, commercial & bespoke interior projects.' },
    { value: '350+', label: 'Projects Completed', detail: 'Delivered with precision, on time and within budget, across Mumbai & beyond.' },
    { value: '1,200+', label: 'Families Served', detail: 'Trusted by discerning homeowners and businesses across India.' },
]

export default function Stats() {
    return (
        <section id="about" className="section-padding px-6 bg-[#090909]">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    tagline="Our Legacy"
                    title={<>Built on <em className="text-[#C9A227] not-italic">Trust</em></>}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left — Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                            alt="Luxury Interior"
                            className="w-full h-[540px] object-cover"
                        />
                        {/* Offset gold frame */}
                        <div className="absolute inset-0 border border-[#C9A227]/20 translate-x-5 translate-y-5 -z-10 hidden lg:block" />
                        {/* Floating stat chip */}
                        <div className="absolute -bottom-7 -right-7 bg-[#C9A227] px-7 py-5 hidden lg:block">
                            <p className="font-serif text-4xl font-bold text-black leading-none">12+</p>
                            <p className="text-black/60 text-[10px] font-medium tracking-widest uppercase mt-1">Years of Excellence</p>
                        </div>
                    </motion.div>

                    {/* Right — Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.12 }}
                                className="flex items-start gap-8 py-9 border-b border-white/6 last:border-0"
                            >
                                <p className="font-serif text-6xl font-light text-[#C9A227] leading-none shrink-0 w-28">
                                    {stat.value}
                                </p>
                                <div className="pt-2">
                                    <p className="text-white text-base font-medium mb-1.5 tracking-wide">{stat.label}</p>
                                    <p className="text-muted text-sm leading-relaxed">{stat.detail}</p>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-10"
                        >
                            <a href="#contact" className="btn-gold">
                                Start Your Project
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
