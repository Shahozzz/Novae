import { useI18n } from '../../hooks/useI18n';
import { Monitor, Briefcase, Globe, ShieldCheck, Zap, Laptop, Smartphone, Wifi, ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Services() {
    const { t } = useI18n();

    const services = [
        {
            id: 'it-support',
            title: t.services.itSupport.title,
            description: t.services.itSupport.description,
            icon: Monitor,
            className: 'md:col-span-2 lg:col-span-2',
            color: 'bg-primary/20 text-primary',
            features: ['PC/Mac Repair', 'Wi-Fi Setup', 'Remote Support']
        },
        {
            id: 'business',
            title: t.services.business.title,
            description: t.services.business.description,
            icon: Briefcase,
            className: 'md:col-span-1 lg:col-span-1',
            color: 'bg-amber-500/20 text-amber-500',
            features: ['Managed IT', 'Cloud Migration']
        },
        {
            id: 'web-dev',
            title: t.services.webDev.title,
            description: t.services.webDev.description,
            icon: Globe,
            className: 'md:col-span-1 lg:col-span-1',
            color: 'bg-accent/20 text-accent',
            features: ['Next.js', 'E-commerce']
        },
        {
            id: 'cybersecurity',
            title: 'Cybersecurity',
            description: 'Expert protection for your data and identity against evolving digital threats.',
            icon: ShieldCheck,
            className: 'md:col-span-2 lg:col-span-2',
            color: 'bg-red-500/20 text-red-500',
            features: ['Malware Removal', 'VPN Setup', 'Security Audits']
        }
    ];

    return (
        <section id="services" className="py-24 px-6 bg-slate-950/30">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4 animate-reveal">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-glow">
                        {t.services.title}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Tailored IT expertise for the modern Belgian digital landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            className={cn(
                                'glass-card p-8 rounded-[2rem] group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 animate-reveal',
                                service.className
                            )}
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            <div className="h-full flex flex-col justify-between space-y-8">
                                <div className="space-y-6">
                                    <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center transition-colors', service.color)}>
                                        <service.icon className="w-8 h-8" />
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map(feature => (
                                            <span key={feature} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-white/10">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent transition-colors pt-4 border-t border-white/5">
                                        Learn More <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Secondary Services Bar */}
                <div className="flex flex-wrap justify-center gap-12 pt-8 animate-reveal [animation-delay:400ms]">
                    {[
                        { icon: Laptop, label: 'Computer Repair' },
                        { icon: Smartphone, label: 'Mobile Setup' },
                        { icon: Wifi, label: 'Network & Wi-Fi' },
                        { icon: Zap, label: 'Rapid Response' }
                    ].map(item => (
                        <div key={item.label} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                            <item.icon className="w-5 h-5 text-primary" />
                            <span className="text-sm font-bold tracking-tight">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
