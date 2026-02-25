import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { SectionHeader } from './Services'

// ── Animated counter ──────────────────────────────────────
function Counter({ to, suffix = '' }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-40px' })
    const raw = useMotionValue(0)
    const spring = useSpring(raw, { stiffness: 60, damping: 18 })
    const display = useTransform(spring, (v) => {
        if (to >= 1000) return Math.round(v).toLocaleString('en-IN') + suffix
        return Math.round(v) + suffix
    })

    useEffect(() => {
        if (inView) raw.set(parseFloat(to))
    }, [inView, to, raw])

    return (
        <span ref={ref}>
            <motion.span>{display}</motion.span>
        </span>
    )
}

const stats = [
    {
        value: 10,
        suffix: '+',
        label: 'Properties Built',
        detail: 'Premium properties built and delivered across South Delhi, Dwarka, Gurgaon, Noida and the broader Delhi NCR belt.',
    },
    {
        value: 12,
        suffix: '+',
        label: 'Happy Families',
        detail: 'Homeowners and NRI investors who secured safe, high-return properties with our full support.',
    },
]

export default function Stats() {
    return (
        <section id="about" className="section-padding px-6 bg-[#090909]">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    tagline="Our Legacy"
                    title={<>Built on <em className="text-[#C9A227] not-italic">Trust</em></>}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
                    {/* Left — Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="relative w-full h-[480px] bg-[#0a0a0a] flex items-center justify-center">
                            <img
                                src="/logo-light.png"
                                alt="SAI Interior & Infrastructure"
                                className="w-4/5 max-w-md object-contain select-none"
                            />
                        </div>
                        <div className="absolute inset-0 border border-[#C9A227]/20 translate-x-5 translate-y-5 -z-10 hidden lg:block" />


                        {/* Premium text block */}
                        <div className="mt-10 space-y-4 text-white/40 text-sm leading-loose font-light lg:pr-6">
                            <p>
                                With <span className="text-white/70">years of experience</span> in the premium construction sector, we specialise in developing luxury builder floors, high-rise residential apartments, gated housing projects, and commercial developments.
                            </p>
                            <p>
                                We have successfully delivered and executed <span className="text-white/70">10+ premium residential and commercial units</span>, working closely with homeowners, NRIs, and investors to create structurally sound, high-quality properties backed by complete legal compliance and documentation.
                            </p>
                            <p>
                                Our mission is to build with integrity, precision, and transparency, ensuring every project meets the highest standards of design, safety, and long-term value while offering a seamless and secure ownership experience.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right — Animated stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col"
                    >


                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="mt-10 border border-[#C9A227]/20 bg-white/3 p-8"
                        >
                            {/* Top row — photo + name */}
                            <div className="flex items-center gap-6 mb-6">
                                <img
                                    src="/images/manan-joshi.jpg"
                                    alt="Manan Joshi"
                                    className="w-24 h-24 object-cover object-top shrink-0"
                                    style={{ filter: 'saturate(0.9)' }}
                                />
                                <div>
                                    <p className="text-[#C9A227] text-[10px] font-semibold tracking-[0.3em] uppercase mb-1">Founder &amp; Managing Director</p>
                                    <h4 className="font-serif text-2xl font-bold text-white leading-tight">Manan Joshi</h4>
                                    <p className="text-white/40 text-xs mt-1 tracking-wide">Delhi NCR Real Estate Expert</p>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px w-full bg-white/6 mb-6" />

                            {/* Bio */}
                            <p className="text-white/55 text-sm leading-relaxed mb-4">
                                At just <span className="text-white font-medium">24</span>, Manan is shaping a new standard for urban living in Delhi NCR. With a deep understanding of design, construction, and evolving lifestyles, he has already delivered homes for <span className="text-white font-medium">12+ families</span>, spaces built not just to be owned, but to be lived in.
                            </p>
                            <p className="text-white/55 text-sm leading-relaxed mb-4">
                                Driven by precision and purpose, Manan approaches every project with a builder's discipline and a developer's vision. From concept to completion, his focus remains unwavering: creating thoughtfully planned homes that balance quality, functionality, and long-term value.
                            </p>
                            <p className="text-white/55 text-sm leading-relaxed mb-6">
                                His work reflects energy, clarity, and uncompromising commitment. Every structure he builds is a promise of durability, trust, and a better way of living.
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {['Builder Floors', 'Residential Development', 'Custom-Built Homes', 'Legal & Project Compliance', 'South Delhi'].map((tag) => (
                                    <span key={tag} className="text-[10px] text-[#C9A227] border border-[#C9A227]/30 px-3 py-1 tracking-widest uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Quote */}
                            <div className="border-l-2 border-[#C9A227] pl-4">
                                <p className="text-white/70 text-sm italic leading-relaxed font-light">
                                    "Building isn't about concrete and walls, it's about creating spaces where lives take shape. I build with that responsibility in mind."
                                </p>
                                <p className="text-[#C9A227] text-[10px] tracking-widest uppercase mt-2">— Manan Joshi</p>
                            </div>
                        </motion.div>

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
