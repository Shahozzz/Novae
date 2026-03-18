import { useState, useEffect } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { Language } from '../../i18n/translations';
import { Button } from '../ui/button';
import { useAuth } from '../../hooks/useAuth';
import { Monitor, Menu, X, Globe } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link } from '@tanstack/react-router';

export function Navbar() {
    const { language, setLanguage, t } = useI18n();
    const { isAuthenticated, login, logout, user } = useAuth();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = (lang: Language) => {
        setLanguage(lang);
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { label: t.nav.services, href: '#services' },
        { label: t.nav.about, href: '#about' },
        { label: t.nav.contact, href: '#contact' }
    ];

    const languages: { code: Language; label: string }[] = [
        { code: 'en', label: 'EN' },
        { code: 'fr', label: 'FR' },
        { code: 'nl', label: 'NL' }
    ];

    return (
        <nav className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
            isScrolled ? 'glass-card border-none mt-4 mx-6 rounded-2xl' : 'bg-transparent'
        )}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-primary rounded-lg group-hover:bg-accent transition-colors">
                        <Monitor className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
                        BE IT <span className="text-primary group-hover:text-accent transition-colors">Solutions</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop Lang + Auth */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex bg-muted rounded-lg p-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => toggleLanguage(lang.code)}
                                className={cn(
                                    'px-3 py-1 text-xs font-bold rounded-md transition-all',
                                    language === lang.code ? 'bg-primary text-primary-foreground shadow-sm' : 'hover:bg-muted-foreground/10'
                                )}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>

                    {isAuthenticated ? (
                        <div className="flex items-center gap-4">
                            <span className="text-xs text-muted-foreground hidden lg:block">Hi, {user?.displayName}</span>
                            <Button variant="ghost" size="sm" onClick={() => logout()}>Log out</Button>
                        </div>
                    ) : (
                        <Button size="sm" className="font-bold" onClick={() => login()}>
                            {t.nav.login}
                        </Button>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 hover:bg-muted rounded-lg"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass-card rounded-2xl mx-6 p-6 space-y-6 animate-reveal">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-lg font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground flex items-center gap-2">
                                <Globe className="w-4 h-4" /> Language
                            </span>
                            <div className="flex gap-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => toggleLanguage(lang.code)}
                                        className={cn(
                                            'px-3 py-1 text-sm font-bold rounded-md',
                                            language === lang.code ? 'bg-primary text-primary-foreground' : 'bg-muted'
                                        )}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {isAuthenticated ? (
                            <Button className="w-full" onClick={() => logout()}>Log out</Button>
                        ) : (
                            <Button className="w-full" onClick={() => login()}>Sign In</Button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
