import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const inquiryTypes = [
    'Residential Construction',
    'Commercial Projects',
    'Renovation & Restoration',
    'Interior Design',
    'Consultation',
    'Other',
]

export default function ContactForm() {
    const [form, setForm] = useState({
        firstName: '', lastName: '', email: '', phone: '', inquiry: '', message: '', agree: false,
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you. Our team will reach out shortly.')
        setForm({ firstName: '', lastName: '', email: '', phone: '', inquiry: '', message: '', agree: false })
    }

    const fieldCls = [
        'w-full bg-transparent',
        'border-0 border-b border-white/10',
        'focus:border-[#C9A227]',
        'text-white text-sm font-light placeholder-white/20',
        'py-4 px-0 outline-none',
        'transition-colors duration-400',
    ].join(' ')

    return (
        <section id="contact" className="section-padding px-6 bg-[#090909]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                    {/* Left — Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="eyebrow mb-6">Start a Conversation</p>
                        <h2 className="luxury-heading text-6xl text-white mb-8 leading-none">
                            Connect<br />
                            <em className="text-[#C9A227] not-italic">With Us</em>
                        </h2>
                        <div className="h-px w-16 bg-[#C9A227]/50 mb-10" />
                        <p className="text-white/40 text-sm leading-loose font-light max-w-xs">
                            Ready to build something extraordinary? Share your vision and we'll craft a plan around it.
                        </p>

                        <div className="mt-16 pt-10 border-t border-white/5">
                            <p className="eyebrow text-white/20 mb-3">Response Time</p>
                            <p className="text-white font-light text-lg">Within 24 Hours</p>
                            <p className="text-muted text-xs mt-1">Monday – Saturday · 9 AM – 7 PM IST</p>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <input
                                        type="text" name="firstName" placeholder="First name"
                                        value={form.firstName} onChange={handleChange} required
                                        className={fieldCls}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text" name="lastName" placeholder="Last name"
                                        value={form.lastName} onChange={handleChange} required
                                        className={fieldCls}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <input
                                    type="email" name="email" placeholder="Email address"
                                    value={form.email} onChange={handleChange} required
                                    className={fieldCls}
                                />
                                <input
                                    type="tel" name="phone" placeholder="Phone number"
                                    value={form.phone} onChange={handleChange}
                                    className={fieldCls}
                                />
                            </div>

                            <select
                                name="inquiry" value={form.inquiry} onChange={handleChange}
                                required
                                className={`${fieldCls} cursor-pointer appearance-none`}
                            >
                                <option value="" className="bg-[#0E0E0E] text-white/40">Inquiry type</option>
                                {inquiryTypes.map((t) => (
                                    <option key={t} value={t} className="bg-[#0E0E0E] text-white">{t}</option>
                                ))}
                            </select>

                            <textarea
                                name="message" placeholder="Tell us about your project..."
                                value={form.message} onChange={handleChange} rows={4} required
                                className={`${fieldCls} resize-none`}
                            />

                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input
                                    type="checkbox" name="agree" checked={form.agree} onChange={handleChange} required
                                    className="mt-1 w-3.5 h-3.5 accent-[#C9A227] shrink-0"
                                />
                                <span className="text-white/25 text-xs leading-relaxed group-hover:text-white/40 transition-colors">
                                    I agree to the{' '}
                                    <a href="#" className="text-[#C9A227] hover:underline">Terms of Service</a>
                                    {' '}and{' '}
                                    <a href="#" className="text-[#C9A227] hover:underline">Privacy Policy</a>.
                                </span>
                            </label>

                            <motion.button
                                whileHover={{ gap: '1.25rem' }}
                                type="submit"
                                className="btn-gold w-fit flex items-center gap-4 mt-2"
                            >
                                Send Message
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
