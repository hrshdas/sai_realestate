import { motion } from 'framer-motion'
import { Shield, Star, Clock, HeadphonesIcon, TrendingUp, Key } from 'lucide-react'

const features = [
    {
        icon: Shield,
        title: 'Verified Properties',
        description: 'Every listing undergoes rigorous legal and quality verification ensuring 100% authentic, encumbrance-free properties.',
    },
    {
        icon: Star,
        title: 'Premium Listings Only',
        description: 'We curate only the finest luxury properties, handpicked by our expert team for their exceptional quality and value.',
    },
    {
        icon: Clock,
        title: 'Swift Transactions',
        description: 'Our streamlined process and expert negotiations ensure quick closures — from discovery to possession in record time.',
    },
    {
        icon: HeadphonesIcon,
        title: '24/7 Dedicated Support',
        description: 'Our concierge team is available round the clock to guide you through every step of your real estate journey.',
    },
    {
        icon: TrendingUp,
        title: 'Best Investment Returns',
        description: 'Leverage our market intelligence to make smart investments that deliver superior long-term returns on capital.',
    },
    {
        icon: Key,
        title: 'End-to-End Service',
        description: 'From property search and legal due diligence to home loans and interior design — we manage every detail.',
    },
]

export default function WhyChooseUs() {
    return (
        <section className="py-28 px-6 bg-[#111111]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#C9A227] text-xs font-semibold tracking-[0.35em] uppercase mb-4">✦ Our Advantage ✦</p>
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
                        Why Choose <span className="text-[#C9A227]">SAI Estate</span>
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-16 bg-[#C9A227]/40" />
                        <div className="h-1 w-12 bg-[#C9A227]" />
                        <div className="h-px w-16 bg-[#C9A227]/40" />
                    </div>
                    <p className="text-gray-400 max-w-xl mx-auto mt-6 leading-relaxed">
                        We don't just sell properties — we craft exceptional real estate experiences tailored to your unique vision.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="group p-8 glass-card hover:border-[#C9A227]/40 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-[#C9A227]/10 flex items-center justify-center mb-6 group-hover:bg-[#C9A227]/20 transition-colors duration-300">
                                    <Icon className="w-7 h-7 text-[#C9A227]" />
                                </div>
                                <h3 className="font-serif text-xl font-semibold text-white mb-3 group-hover:text-[#C9A227] transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
