import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')`,
                    transform: 'scale(1.05)',
                }}
            />
            {/* Gradient overlay — deep at bottom, slight at top */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/85" />

            {/* Content */}
            <div className="relative z-10 px-6 max-w-5xl mx-auto text-center pt-24">

                {/* Eyebrow */}
                <motion.p
                    custom={0}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="eyebrow mb-8 opacity-80"
                >
                    SAI Interior &amp; Infrastructure
                </motion.p>

                {/* Heading */}
                <motion.h1
                    custom={0.15}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="luxury-heading text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] text-white mb-8"
                    style={{ lineHeight: 1.02 }}
                >
                    Building Dreams,<br />
                    <em className="text-[#C9A227] not-italic">One Space</em>
                    {' '}at a Time
                </motion.h1>

                {/* Divider */}
                <motion.div
                    custom={0.25}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center mb-8"
                >
                    <div className="gold-divider w-40">
                        <div className="gold-divider-dot" />
                    </div>
                </motion.div>

                {/* Subheading */}
                <motion.p
                    custom={0.35}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-white/50 text-base sm:text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto tracking-wide"
                >
                    We design and construct with precision and integrity — crafting spaces that endure and inspire.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    custom={0.5}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#gallery" className="btn-gold">
                        Explore Our Work
                    </a>
                    <a href="#contact" className="btn-outline">
                        Contact Us
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="eyebrow opacity-40 text-white" style={{ fontSize: '0.55rem' }}>SCROLL</span>
                <div className="w-px h-10 bg-gradient-to-b from-[#C9A227]/60 to-transparent" />
            </motion.div>

            {/* WhatsApp */}
            <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.08 }}
                className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-green-900/30"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="w-6 h-6 text-white fill-white" />
            </motion.a>
        </section>
    )
}
