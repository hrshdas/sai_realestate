import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'

const navLinks = [
    {
        label: 'Our Work',
        href: '#gallery',
        dropdown: ['Residential Projects', 'Commercial Projects', 'Renovations', 'Interior Design'],
    },
    { label: 'About Us', href: '#about' },
    {
        label: 'Services',
        href: '#services',
        dropdown: ['Residential Construction', 'Commercial Projects', 'Renovation & Restoration', 'Interior Design'],
    },
    { label: 'Resources', href: '#' },
]

function DropdownMenu({ items }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-[#111] border border-[#C9A227]/20 shadow-2xl z-50"
        >
            {items.map((item) => (
                <a
                    key={item}
                    href="#"
                    className="block px-5 py-3 text-sm text-gray-300 hover:text-[#C9A227] hover:bg-white/5 transition-colors duration-200"
                >
                    {item}
                </a>
            ))}
        </motion.div>
    )
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null)
    const [mobileExpanded, setMobileExpanded] = useState(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black shadow-lg shadow-black/50' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center shrink-0">
                    <img src="/logo-light.png" alt="SAI Interior & Infrastructure" className="h-20 w-auto object-contain" />
                </a>

                {/* Nav Links — right aligned */}
                <div className="hidden lg:flex items-center gap-8 ml-auto mr-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.label}
                            className="relative"
                            onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <a
                                href={link.href}
                                className="inline-flex items-center gap-1 text-sm font-medium text-gray-200 hover:text-[#C9A227] transition-colors duration-300 gold-underline tracking-wide whitespace-nowrap"
                            >
                                {link.label}
                                {link.dropdown && (
                                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                                )}
                            </a>
                            <AnimatePresence>
                                {link.dropdown && openDropdown === link.label && (
                                    <DropdownMenu items={link.dropdown} />
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Right CTAs */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="#contact"
                        className="px-6 py-2.5 border border-[#C9A227] text-[#C9A227] text-sm font-bold tracking-widest hover:bg-[#C9A227] hover:text-black transition-all duration-300"
                    >
                        CONTACT
                    </a>
                    <a
                        href="#contact"
                        className="px-7 py-2.5 bg-[#C9A227] hover:bg-[#a07d1a] text-black text-sm font-bold tracking-widest transition-all duration-300"
                    >
                        BUILD WITH US
                    </a>
                </div>

                {/* Hamburger */}
                <button
                    className="lg:hidden text-white hover:text-[#C9A227] transition-colors ml-auto"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-black border-t border-[#C9A227]/20 overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <div key={link.label}>
                                    {link.dropdown ? (
                                        <>
                                            <button
                                                className="w-full flex items-center justify-between py-3 text-gray-200 hover:text-[#C9A227] border-b border-white/5 transition-colors"
                                                onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                                            >
                                                {link.label}
                                                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === link.label ? 'rotate-180' : ''}`} />
                                            </button>
                                            {mobileExpanded === link.label && (
                                                <div className="pl-4 pb-2">
                                                    {link.dropdown.map((i) => (
                                                        <a key={i} href="#" className="block py-2 text-sm text-gray-400 hover:text-[#C9A227]">{i}</a>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="block py-3 text-gray-200 hover:text-[#C9A227] border-b border-white/5 transition-colors"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </div>
                            ))}
                            <a
                                href="#contact"
                                className="mt-2 py-3 text-center border border-[#C9A227] text-[#C9A227] text-sm font-bold tracking-widest"
                                onClick={() => setMobileOpen(false)}
                            >
                                CONTACT
                            </a>
                            <a
                                href="#contact"
                                className="mt-2 py-3 text-center bg-[#C9A227] text-black text-sm font-bold tracking-widest hover:bg-[#a07d1a] transition-all"
                                onClick={() => setMobileOpen(false)}
                            >
                                BUILD WITH US
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
