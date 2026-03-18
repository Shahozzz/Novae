import { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { toast } from 'react-hot-toast';
import { Mail, Phone, MapPin, Send, MessageSquare, Briefcase } from 'lucide-react';

export function Contact() {
    const { t } = useI18n();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success('Inquiry sent successfully! We\'ll contact you soon.', {
                style: { background: 'hsl(var(--card))', color: 'hsl(var(--foreground))', border: '1px solid hsl(var(--border))' }
            });
        }, 1500);
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'hello@beit.solutions' },
        { icon: Phone, label: 'Phone', value: '+32 400 000 000' },
        { icon: MapPin, label: 'Location', value: 'Rue de la Loi, Brussels' }
    ];

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-12 animate-reveal">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-glow">
                            {t.contact.title}
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            {t.contact.subtitle}
                        </p>
                    </div>

                    <div className="grid gap-8">
                        {contactInfo.map((item, i) => (
                            <div key={item.label} className="flex items-center gap-6 group animate-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.label}</div>
                                    <div className="text-lg font-medium">{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="glass-card p-8 rounded-[2rem] space-y-4 border-primary/20 bg-primary/5 animate-reveal [animation-delay:300ms]">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-primary rounded-lg">
                                <Briefcase className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <h3 className="text-xl font-display font-bold">Priority Business Support</h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Need immediate response? Small businesses with service agreements get priority 1-hour response times.
                        </p>
                    </div>
                </div>

                <div className="animate-reveal [animation-delay:200ms]">
                    <form onSubmit={handleSubmit} className="glass-card p-10 rounded-[2.5rem] space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 text-primary/10">
                            <MessageSquare className="w-24 h-24 rotate-12" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 relative">
                            <div className="space-y-3">
                                <Label htmlFor="name" className="text-sm font-bold tracking-tight uppercase">{t.contact.name}</Label>
                                <Input id="name" placeholder="John Doe" required className="h-14 glass-card border-white/5 bg-white/5 focus:bg-white/10" />
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="email" className="text-sm font-bold tracking-tight uppercase">{t.contact.email}</Label>
                                <Input id="email" type="email" placeholder="john@example.com" required className="h-14 glass-card border-white/5 bg-white/5 focus:bg-white/10" />
                            </div>
                        </div>

                        <div className="space-y-3 relative">
                            <Label htmlFor="message" className="text-sm font-bold tracking-tight uppercase">{t.contact.message}</Label>
                            <Textarea id="message" placeholder="How can we help?" required className="min-h-[160px] glass-card border-white/5 bg-white/5 focus:bg-white/10 resize-none" />
                        </div>

                        <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold shadow-glow group" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending...
                                </div>
                            ) : (
                                <>
                                    {t.contact.send}
                                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </Button>

                        <p className="text-center text-xs text-muted-foreground">
                            By sending this inquiry, you agree to our <span className="underline hover:text-primary cursor-pointer">Privacy Policy</span>.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
