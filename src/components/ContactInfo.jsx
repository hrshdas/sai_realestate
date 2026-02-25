import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { SectionHeader } from './Services'

const contactDetails = [
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 9910163351 / +91 7503211210',
        href: 'tel:+919910163351',
        detail: 'Mon – Sat, 9 AM – 7 PM',
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'Mananjoshi871@gmail.com',
        href: 'mailto:Mananjoshi871@gmail.com',
        detail: 'Replies within 24 hours',
    },
    {
        icon: MapPin,
        label: 'Head Office',
        value: '37/15, Old Rajinder Nagar\nNew Delhi – 110060',
        href: 'https://www.google.com/maps/place//@28.64049,77.1762551,17z/data=!4m5!1m2!2m1!1zaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vP3E9MzcvMTUrT2xkK1JhamluZGVyK05hZ2FyK05ldytEZWxoaSsxMTAwNjA!3m1!15sCkRodHRwczovL21hcHMuZ29vZ2xlLmNvbS8_cT0zNy8xNStPbGQrUmFqaW5kZXIrTmFnYXIrTmV3K0RlbGhpKzExMDA2MCIDiAEBkgEQY29tcG91bmRfc2VjdGlvbuABAA?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D',
        detail: 'By appointment only',
    },
    {
        icon: MapPin,
        label: 'Branch Office',
        value: '4C/10 Bada Bazaar Marg\nOld Rajinder Nagar, New Delhi – 110060',
        href: 'https://www.google.com/maps/place//@28.64049,77.1762551,17z/data=!4m5!1m2!2m1!1zaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vP3E9MzcvMTUrT2xkK1JhamluZGVyK05hZ2FyK05ldytEZWxoaSsxMTAwNjA!3m1!15sCkRodHRwczovL21hcHMuZ29vZ2xlLmNvbS8_cT0zNy8xNStPbGQrUmFqaW5kZXIrTmFnYXIrTmV3K0RlbGhpKzExMDA2MCIDiAEBkgEQY29tcG91bmRfc2VjdGlvbuABAA?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D',
        detail: 'By appointment only',
    },
]

export default function ContactInfo() {
    return (
        <section className="section-padding px-6 bg-[#0E0E0E]">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    tagline="Reach Us"
                    title={<>Get In <em className="text-[#C9A227] not-italic">Touch</em></>}
                    subtitle="We're available through any of the channels below — a conversation is where every great space begins."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left — Contact rows */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col divide-y divide-white/6"
                    >
                        {contactDetails.map(({ icon: Icon, label, value, href, detail }, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex items-start gap-7 py-9"
                            >
                                <div className="w-9 h-9 border border-[#C9A227]/25 flex items-center justify-center shrink-0 mt-0.5">
                                    <Icon className="w-4 h-4 text-[#C9A227]" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="eyebrow text-white/30 mb-2">{label}</p>
                                    <a href={href} className="text-white text-base font-light hover:text-[#C9A227] transition-colors duration-400 block whitespace-pre-line">
                                        {value}
                                    </a>
                                    <p className="text-muted text-xs mt-1">{detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right — Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="h-[400px] overflow-hidden"
                    >
                        <iframe
                            title="Office Location"
                            src="https://maps.google.com/maps?q=37/15+Old+Rajinder+Nagar+New+Delhi+110060&t=&z=17&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(92%) hue-rotate(180deg) saturate(0.3)' }}
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
