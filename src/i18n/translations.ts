export const translations = {
  en: {
    nav: {
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      login: 'Login'
    },
    hero: {
      title: 'Reliable IT support for modern businesses',
      subtitle: 'We help companies in Belgium with managed IT, cloud, and cybersecurity.'
    },
    services: {
      title: 'Services',
      items: {
        support: 'IT Support',
        managed: 'Managed IT',
        cloud: 'Cloud Services',
        security: 'Cybersecurity'
      }
    },
    contact: {
      title: 'Stay in touch',
      subtitle: 'Contact us for support, projects, or advice.'
    },
    footer: {
      company: 'Company',
      services: 'Services',
      support: 'Support',
      newsletter: 'Newsletter',
      emailPlaceholder: 'Your email'
    }
  },
  fr: {
    nav: {
      services: 'Services',
      about: 'À propos',
      contact: 'Contact',
      login: 'Connexion'
    },
    hero: {
      title: 'Support informatique fiable pour les entreprises modernes',
      subtitle: 'Nous aidons les entreprises en Belgique avec l’IT géré, le cloud et la cybersécurité.'
    },
    services: {
      title: 'Services',
      items: {
        support: 'Support informatique',
        managed: 'IT géré',
        cloud: 'Services cloud',
        security: 'Cybersécurité'
      }
    },
    contact: {
      title: 'Restons en contact',
      subtitle: 'Contactez-nous pour le support, les projets ou des conseils.'
    },
    footer: {
      company: 'Entreprise',
      services: 'Services',
      support: 'Support',
      newsletter: 'Newsletter',
      emailPlaceholder: 'Votre e-mail'
    }
  },
  nl: {
    nav: {
      services: 'Diensten',
      about: 'Over ons',
      contact: 'Contact',
      login: 'Inloggen'
    },
    hero: {
      title: 'Betrouwbare IT-ondersteuning voor moderne bedrijven',
      subtitle: 'Wij helpen bedrijven in België met managed IT, cloud en cybersecurity.'
    },
    services: {
      title: 'Diensten',
      items: {
        support: 'IT-support',
        managed: 'Managed IT',
        cloud: 'Cloudservices',
        security: 'Cybersecurity'
      }
    },
    contact: {
      title: 'Blijf in contact',
      subtitle: 'Neem contact met ons op voor support, projecten of advies.'
    },
    footer: {
      company: 'Bedrijf',
      services: 'Diensten',
      support: 'Support',
      newsletter: 'Nieuwsbrief',
      emailPlaceholder: 'Uw e-mailadres'
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationSchema = typeof translations.en;
