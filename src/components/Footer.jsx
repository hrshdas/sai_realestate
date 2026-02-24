import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react'

const footerCols = [
    {
        heading: 'About Us',
        links: ['Our Story', 'Our Team', 'Careers', 'Press & Media'],
    },
    {
        heading: 'Our Work',
        links: ['Residential Projects', 'Commercial Projects', 'Renovations', 'Interior Design'],
    },
    {
        heading: 'Services',
        links: ['New Construction', 'Renovation & Restoration', 'Interior Design', 'Consultation'],
    },
]

const socials = [Instagram, Linkedin, Facebook, Twitter]

export default function Footer() {
    return (
        <footer className="bg-[#080808] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 pt-24 pb-10">

                {/* Top grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">

                    {/* Col 1 — Brand */}
                    <div>
                        <a href="#" className="flex items-center mb-8">
                            <img src="/logo-light.png" alt="SAI Interior & Infrastructure" className="h-16 w-auto object-contain" />
                        </a>
                        <div className="flex flex-col gap-5 mb-10">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-3.5 h-3.5 text-[#C9A227] mt-1 shrink-0" strokeWidth={1.5} />
                                <span className="text-white/30 text-xs leading-relaxed">37/15, Old Rajinder Nagar<br />New Delhi – 110060</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-3.5 h-3.5 text-[#C9A227] shrink-0" strokeWidth={1.5} />
                                <a href="tel:+919910163351" className="text-white/30 text-xs hover:text-[#C9A227] transition-colors duration-300">+91 9910163351 / +91 7503211210</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-3.5 h-3.5 text-[#C9A227] shrink-0" strokeWidth={1.5} />
                                <a href="mailto:Mananjoshi871@gmail.com" className="text-white/30 text-xs hover:text-[#C9A227] transition-colors duration-300">Mananjoshi871@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            {socials.map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -2 }}
                                    className="w-8 h-8 border border-white/8 flex items-center justify-center text-white/25 hover:border-[#C9A227]/50 hover:text-[#C9A227] transition-all duration-400"
                                >
                                    <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Cols 2-4 — Links */}
                    {footerCols.map((col) => (
                        <div key={col.heading}>
                            <h4 className="eyebrow text-white/25 mb-7">{col.heading}</h4>
                            <ul className="flex flex-col gap-4">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-white/30 text-xs hover:text-white/70 transition-colors duration-400"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/15 text-[11px] tracking-wide">
                        © {new Date().getFullYear()} SAI Interior & Infrastructure. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
                            <a key={item} href="#" className="text-white/15 text-[11px] hover:text-white/35 transition-colors duration-300">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
