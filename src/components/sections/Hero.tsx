import { Button } from '../ui/button';
import { useI18n } from '../../hooks/useI18n';
import { MousePointer2, Zap, Shield, Cpu, Monitor } from 'lucide-react';
import { EditableText } from "@/components/cms/EditableText";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] -z-10" />

      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left space-y-8 animate-reveal">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-bold tracking-wider uppercase text-primary border-primary/20">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Active in Brussels, Antwerp & Ghent
          </div>

          <h1 className="text-6xl md:text-7xl font-display font-bold leading-tight tracking-tight text-glow">

            <EditableText id="hero.title">

              {t.hero.title}

            </EditableText>

          </h1>

          <p>

            <EditableText id="hero.subtitle">

              {t.hero.subtitle}

            </EditableText>

          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button>

              <EditableText id="hero.cta">

                {t.hero.cta}

              </EditableText>

            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold glass-card bg-transparent border-white/10 hover:bg-white/5">
              {t.hero.secondaryCta}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Secured & Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Ultra-fast Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              <span className="text-sm font-medium">Premium Tech Setup</span>
            </div>
          </div>
        </div>

        {/* Visual Element */}
        <div className="hidden lg:block relative animate-reveal [animation-delay:200ms]">
          <div className="glass-card rounded-[2rem] p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent -z-10 group-hover:opacity-60 transition-opacity" />

            {/* Visual content placeholder */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="h-2 w-32 bg-white/10 rounded-full" />
              </div>

              <div className="space-y-4">
                <div className="h-8 w-full bg-white/5 rounded-xl border border-white/10" />
                <div className="h-32 w-full bg-primary/20 rounded-2xl border border-primary/20 flex items-center justify-center">
                  <Monitor className="w-12 h-12 text-primary animate-pulse" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-white/5 rounded-2xl border border-white/10" />
                  <div className="h-24 bg-white/5 rounded-2xl border border-white/10" />
                </div>
              </div>

              <div className="flex items-center justify-center py-4">
                <MousePointer2 className="w-6 h-6 text-accent animate-bounce" />
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 glass-card p-4 rounded-2xl shadow-xl animate-bounce [animation-duration:3s]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg text-green-500">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Efficiency</div>
                  <div className="text-sm font-bold text-green-500">+98%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
