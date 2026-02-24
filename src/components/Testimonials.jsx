import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { SectionHeader } from './Services'

const testimonials = [
    {
        name: 'Rajesh Malhotra',
        role: 'Homeowner · South Delhi',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        rating: 5,
        text: 'SAI helped us finalise our builder floor in South Delhi. Their documentation support and negotiation expertise was extremely professional — everything was handled with complete transparency.',
    },
    {
        name: 'Priya Khanna',
        role: 'Homeowner · Dwarka',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
        rating: 5,
        text: 'I was looking for a safe family apartment in Dwarka. The team showed only verified properties, handled all paperwork, and the entire process felt completely stress-free.',
    },
    {
        name: 'Amit Bansal',
        role: 'Investor · Gurgaon',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
        rating: 5,
        text: 'As a seasoned investor, I needed clear ROI guidance on Gurgaon properties. Their market insight was accurate and the returns have been exactly as projected.',
    },
    {
        name: 'Neha Arora',
        role: 'Homeowner · Noida',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
        rating: 5,
        text: 'The transparency and honesty throughout the process is what impressed me most. No hidden charges, no pressure — highly recommended for any Delhi NCR buyer.',
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-[#0E0E0E] p-10 flex flex-col hover:bg-[#141414] transition-colors duration-500"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-8">
                                {Array.from({ length: t.rating }).map((_, j) => (
                                    <Star key={j} className="w-3 h-3 text-[#C9A227] fill-[#C9A227]" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-white/55 text-sm leading-loose flex-1 mb-10 font-light italic">
                                &ldquo;{t.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-8 border-t border-white/6">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-10 h-10 rounded-full object-cover grayscale opacity-75"
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
