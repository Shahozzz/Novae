import { Twitter, Linkedin, Facebook, Instagram, Send } from 'lucide-react';
import { useI18n } from '../../hooks/useI18n';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useBusinessConfig } from '../../hooks/useBusinessConfig';

export function Footer() {
   const { t } = useI18n();
   const { config, isLoading } = useBusinessConfig();

   const footerLinks = [
      { title: 'Company', items: ['About Us', 'Our Process', 'Career', 'Blog'] },
      { title: 'Services', items: ['IT Support', 'Business Managed IT', 'Cloud Services', 'Cybersecurity'] },
      { title: 'Support', items: ['FAQ', 'Client Portal', 'Emergency Support', 'Documentation'] }
   ];

   const socialLinks = [
      { Icon: Twitter, url: config?.twitterUrl },
      { Icon: Linkedin, url: config?.linkedinUrl },
      { Icon: Facebook, url: config?.facebookUrl },
      { Icon: Instagram, url: config?.instagramUrl }
   ].filter((item) => item.url);

   if (isLoading) return null;

   return (
      <footer className="border-t border-border bg-background">
         <div className="container mx-auto px-4 py-12">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
               <div className="space-y-4 lg:col-span-2">
                  <div>
                     <h3 className="text-lg font-semibold">
                        {config?.businessName || 'BE IT Solutions'}
                     </h3>
                     <p className="mt-2 text-sm text-muted-foreground">
                        {config?.address || 'Brussels, Belgium'}
                     </p>
                     <p className="text-sm text-muted-foreground">
                        {config?.email || 'contact@example.com'}
                     </p>
                     <p className="text-sm text-muted-foreground">
                        {config?.phone || '+32 000 00 00 00'}
                     </p>
                  </div>

                  {socialLinks.length > 0 && (
                     <div className="flex gap-3">
                        {socialLinks.map(({ Icon, url }, index) => (
                           <a
                              key={index}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-md border border-border p-2 text-muted-foreground transition hover:text-foreground"
                              aria-label="Social link"
                           >
                              <Icon className="h-4 w-4" />
                           </a>
                        ))}
                     </div>
                  )}
               </div>

               {footerLinks.map((group) => (
                  <div key={group.title}>
                     <h4 className="mb-3 text-sm font-semibold">{group.title}</h4>
                     <ul className="space-y-2 text-sm text-muted-foreground">
                        {group.items.map((item) => (
                           <li key={item}>
                              <a href="#" className="transition hover:text-foreground">
                                 {item}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}

               <div className="lg:col-span-2">
                  <h4 className="mb-3 text-sm font-semibold">
                     {t.contact?.title || 'Stay in touch'}
                  </h4>
                  <div className="flex gap-2">
                     <Input type="email" placeholder="Your email" />
                     <Button type="button" size="icon" aria-label="Subscribe">
                        <Send className="h-4 w-4" />
                     </Button>
                  </div>
               </div>
            </div>

            <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
               © {new Date().getFullYear()} {config?.businessName || 'BE IT Solutions'}.
            </div>
         </div>
      </footer>
   );
}
