import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Message sent! We will contact you shortly.')
        setForm({ name: '', email: '', phone: '', message: '' })
    }

    const inputCls = 'w-full bg-transparent border border-white/10 focus:border-[#C9A227] text-white placeholder-gray-600 px-5 py-4 text-sm outline-none transition-colors duration-300'

    return (
        <section id="contact" className="py-28 px-6 bg-[#111111]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#C9A227] text-xs font-semibold tracking-[0.35em] uppercase mb-4">✦ Get In Touch ✦</p>
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
                        Let's Find Your <span className="text-[#C9A227]">Dream Home</span>
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-16 bg-[#C9A227]/40" />
                        <div className="h-1 w-12 bg-[#C9A227]" />
                        <div className="h-px w-16 bg-[#C9A227]/40" />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Full Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className={inputCls}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className={inputCls}
                                />
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                className={inputCls}
                            />
                            <textarea
                                name="message"
                                placeholder="Tell us about your dream property..."
                                value={form.message}
                                onChange={handleChange}
                                rows={5}
                                required
                                className={`${inputCls} resize-none`}
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="flex items-center justify-center gap-3 bg-[#C9A227] hover:bg-[#a07d1a] text-black font-bold py-4 px-10 text-sm tracking-widest transition-all duration-300 self-start"
                            >
                                <Send className="w-4 h-4" />
                                SEND MESSAGE
                            </motion.button>
                        </form>

                        <div className="mt-10 flex flex-col gap-5">
                            {[
                                { icon: Phone, label: '+91 98765 43210', sub: 'Mon–Sat, 9AM–7PM' },
                                { icon: Mail, label: 'hello@saiestate.in', sub: 'We reply within 24 hours' },
                                { icon: MapPin, label: 'Bandra West, Mumbai 400050', sub: 'Visit our showroom' },
                            ].map(({ icon: Icon, label, sub }, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#C9A227]/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Icon className="w-4 h-4 text-[#C9A227]" />
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-medium">{label}</p>
                                        <p className="text-gray-500 text-xs mt-0.5">{sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="h-[480px] overflow-hidden border border-white/10"
                    >
                        <iframe
                            title="SAI Estate Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.861018013899!2d72.82609377499517!3d19.059641582134944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8a5e0a0ffff%3A0x5a15e1c5b3c0ad2b!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
