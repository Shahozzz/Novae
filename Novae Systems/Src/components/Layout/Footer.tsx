import { Monitor, Twitter, Linkedin, Facebook, Instagram, Send } from 'lucide-react';
import { useI18n } from '../../hooks/useI18n';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export function Footer() {
    const { t } = useI18n();

    const footerLinks = [
        { title: 'Company', items: ['About Us', 'Our Process', 'Career', 'Blog'] },
        { title: 'Services', items: ['IT Support', 'Business Managed IT', 'Cloud Services', 'Cybersecurity'] },
        { title: 'Support', items: ['FAQ', 'Client Portal', 'Emergency Support', 'Documentation'] }
    ];

    return (
        <footer className="pt-24 pb-12 px-6 border-t border-white/5 relative bg-slate-950/50 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute bottom-0 right-0 w-full h-[300px] bg-gradient-to-t from-primary/5 to-transparent -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Col */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="p-2 bg-primary rounded-lg">
                                <Monitor className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="font-display font-bold text-xl tracking-tight">
                                BE IT <span className="text-primary">Solutions</span>
                            </span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                            Expert IT support and digital innovation for Belgium\'s individuals and small businesses. We make technology work for you.
                        </p>

                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                                <button key={i} className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all border-white/5">
                                    <Icon className="w-5 h-5" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Links Cols */}
                    {footerLinks.map(col => (
                        <div key={col.title} className="space-y-8">
                            <h4 className="font-display font-bold text-lg tracking-tight uppercase text-primary/80">{col.title}</h4>
                            <ul className="space-y-4">
                                {col.items.map(item => (
                                    <li key={item}>
                                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter Col */}
                    <div className="space-y-8">
                        <h4 className="font-display font-bold text-lg tracking-tight uppercase text-primary/80">Newsletter</h4>
                        <p className="text-muted-foreground">Stay updated with latest IT trends and security tips.</p>
                        <div className="relative">
                            <Input placeholder="Your Email" className="h-14 glass-card border-white/5 bg-white/5 pr-16" />
                            <Button size="icon" className="absolute right-1 top-1 bottom-1 h-12 w-12 rounded-xl">
                                <Send className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
                    <p>© 2024 BE IT Solutions. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-primary transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );