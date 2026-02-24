import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { SectionHeader } from './Services'

const testimonials = [
    {
        name: 'Rajesh Kumar',
        role: 'Property Owner · New Delhi',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        rating: 5,
        text: 'SAI transformed our house into a home that exceeds every expectation. Their attention to detail and craftsmanship is truly unmatched.',
    },
    {
        name: 'Priya Kapoor',
        role: 'Business Owner · Mumbai',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
        rating: 5,
        text: 'Our commercial space was delivered on time, on budget, and beyond expectations. A rare combination of professionalism and artistry.',
    },
    {
        name: 'Arjun Mehta',
        role: 'Homeowner · Bangalore',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
        rating: 5,
        text: 'The renovation of our villa was handled with absolute care. Every finish speaks of quality — we couldn\'t be more satisfied.',
    },
]

export default function Testimonials() {
    return (
        <section className="section-padding px-6 bg-[#0E0E0E]">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    tagline="Client Voices"
                    title={<>What Our <em className="text-[#C9A227] not-italic">Clients Say</em></>}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-[#0E0E0E] p-10 flex flex-col hover:bg-[#141414] transition-colors duration-500"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-8">
                                {Array.from({ length: t.rating }).map((_, j) => (
                                    <Star key={j} className="w-3 h-3 text-[#C9A227] fill-[#C9A227]" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-white/60 text-sm leading-loose flex-1 mb-10 font-light italic">
                                &ldquo;{t.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-8 border-t border-white/6">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-10 h-10 rounded-full object-cover grayscale opacity-80"
                                />
                                <div>
                                    <p className="text-white text-sm font-medium">{t.name}</p>
                                    <p className="text-[#C9A227] text-[11px] tracking-widest mt-0.5 uppercase font-medium">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
