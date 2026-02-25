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
                        <img
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                            alt="Luxury Interior"
                            className="w-full h-[480px] object-cover"
                        />
                        <div className="absolute inset-0 border border-[#C9A227]/20 translate-x-5 translate-y-5 -z-10 hidden lg:block" />
                        <div className="absolute -bottom-7 -right-7 bg-[#C9A227] px-7 py-5 hidden lg:block">
                            <p className="font-serif text-4xl font-bold text-black leading-none">12+</p>
                            <p className="text-black/60 text-[10px] font-medium tracking-widest uppercase mt-1">Happy Families</p>
                        </div>

                        {/* Premium text block */}
                        <div className="mt-10 space-y-4 text-white/40 text-sm leading-loose font-light lg:pr-6">
                            <p>
                                With over <span className="text-white/70">12+ years of experience</span> in Delhi NCR's
                                premium real estate market, we specialise in luxury builder floors, high-rise apartments,
                                gated societies, and commercial investments across South Delhi, Dwarka, Gurgaon, and Noida.
                            </p>
                            <p>
                                We have successfully closed <span className="text-white/70">500+ premium transactions</span> and
                                assisted NRIs and investors in securing safe, high-return properties with complete legal
                                and documentation support.
                            </p>
                            <p>
                                Our mission is to provide transparent deals, verified listings, and end-to-end legal assistance —
                                ensuring every client enjoys a smooth and secure property buying experience.
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
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.12 }}
                                className="flex flex-col sm:flex-row items-start gap-2 sm:gap-8 py-7 md:py-9 border-b border-white/6 last:border-0"
                            >
                                <p className="font-serif text-4xl md:text-6xl font-light text-[#C9A227] leading-none shrink-0 tabular-nums">
                                    <Counter to={stat.value} suffix={stat.suffix} />
                                </p>
                                <div className="pt-2">
                                    <p className="text-white text-base font-medium mb-1.5 tracking-wide">{stat.label}</p>
                                    <p className="text-muted text-sm leading-relaxed">{stat.detail}</p>
                                </div>
                            </motion.div>
                        ))}

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
                                    src="/images/manan-joshi.png"
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
                                At just <span className="text-white font-medium">24</span>, Manan has already redefined what it means to be a real estate advisor in Delhi NCR. Armed with sharp market instincts and an obsessive focus on client success, he has personally guided <span className="text-white font-medium">12+ families</span> toward properties that don't just match budgets — they match dreams.
                            </p>
                            <p className="text-white/55 text-sm leading-relaxed mb-6">
                                His energy is infectious, his knowledge is razor-sharp, and his commitment? Absolute. Manan doesn't clock out until his clients are home.
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {['Builder Floors', 'Investment Advisory', 'NRI Services', 'Legal Assistance', 'South Delhi'].map((tag) => (
                                    <span key={tag} className="text-[10px] text-[#C9A227] border border-[#C9A227]/30 px-3 py-1 tracking-widest uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Quote */}
                            <div className="border-l-2 border-[#C9A227] pl-4">
                                <p className="text-white/70 text-sm italic leading-relaxed font-light">
                                    "Real estate isn't just about square feet — it's about the life you'll build inside those walls. I'm here to make sure you get both right."
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
