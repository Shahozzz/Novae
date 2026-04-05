import { useState, useEffect } from 'react';
import { useI18n } from '../../hooks/useI18n';
import type { Language } from '../../i18n/translations';
import { Button } from '../ui/button';
import { useAuth } from '../../hooks/useAuth';
import { Menu, X } from 'lucide-react';
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

  if (isAuthenticated) {
    type NavLink = { label: string; href: string };
    const navLinks: NavLink[] = [
    ];
    navLinks.push({ label: 'Admin', href: '/admin' });
  }

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'nl', label: 'NL' }
  ];

  const handleNavLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all',
        isScrolled
          ? 'border-border bg-background/95 backdrop-blur'
          : 'border-transparent bg-background/80'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a
          href="#top"
          className="text-lg font-semibold tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          BE IT Solutions
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(link.href);
                }}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center rounded-md border border-border p-1">
            {languages.map((lang) => (
              <button
                key={String(lang.code)}

                type="button"
                onClick={() => toggleLanguage(lang.code)}
                className={cn(
                  'rounded px-3 py-1 text-xs font-bold transition-all',
                  language === lang.code
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Hi, {user?.displayName || 'User'}
              </span>
              <Button type="button" variant="outline" onClick={() => logout()}>
                Log out
              </Button>
            </div>
          ) : (
            <Button type="button" onClick={() => login()}>
              {t.nav.login}
            </Button>
          )}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="container mx-auto space-y-4 px-4 py-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) =>
                link.href.startsWith('/') ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Language
              </p>
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={String(lang.code)}
                    type="button"
                    onClick={() => toggleLanguage(lang.code)}
                    className={cn(
                      'rounded-md px-3 py-1 text-sm font-bold',
                      language === lang.code
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              {isAuthenticated ? (
                <Button type="button" variant="outline" onClick={() => logout()} className="w-full">
                  Log out
                </Button>
              ) : (
                <Button type="button" onClick={() => login()} className="w-full">
                  {t.nav.login}
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
