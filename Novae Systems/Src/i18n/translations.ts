export const translations = {
    en: {
        nav: {
            services: 'Services',
            about: 'About',
            contact: 'Contact',
            login: 'Sign In'
        },
        hero: {
            title: 'Modern IT Solutions for Belgium',
            subtitle: 'Expert tech support and digital consulting for individuals and small businesses in Brussels, Antwerp, and across Belgium.',
            cta: 'Get Support Now',
            secondaryCta: 'Our Services'
        },
        services: {
            title: 'Our Solutions',
            itSupport: {
                title: 'IT Support & Repair',
                description: 'On-site and remote troubleshooting for computers, networks, and home office setups.'
            },
            business: {
                title: 'Small Business Solutions',
                description: 'Managed IT services, cloud migration, and productivity optimization for SMEs.'
            },
            webDev: {
                title: 'Web & Digital',
                description: 'Custom website design and development to help your Belgian business grow online.'
            }
        },
        contact: {
            title: 'Get in Touch',
            subtitle: 'Have a tech problem or a project? We are here to help.',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send Inquiry'
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
            title: 'Solutions IT Modernes pour la Belgique',
            subtitle: 'Support technique expert et conseil digital pour particuliers et PME à Bruxelles, Anvers et dans toute la Belgique.',
            cta: 'Obtenir de l\'aide',
            secondaryCta: 'Nos Services'
        },
        services: {
            title: 'Nos Solutions',
            itSupport: {
                title: 'Support & Réparation IT',
                description: 'Dépannage sur site et à distance pour ordinateurs, réseaux et bureaux à domicile.'
            },
            business: {
                title: 'Solutions pour PME',
                description: 'Services IT gérés, migration cloud et optimisation de la productivité pour les PME.'
            },
            webDev: {
                title: 'Web & Digital',
                description: 'Conception et développement de sites web sur mesure pour faire croître votre entreprise.'
            }
        },
        contact: {
            title: 'Contactez-nous',
            subtitle: 'Un problème technique ou un projet ? Nous sommes là pour vous aider.',
            name: 'Nom',
            email: 'Email',
            message: 'Message',
            send: 'Envoyer'
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
            title: 'Moderne IT-oplossingen voor België',
            subtitle: 'Deskundige technische ondersteuning en digitaal advies voor particulieren en kmo\'s in Brussel, Antwerpen en heel België.',
            cta: 'Krijg nu ondersteuning',
            secondaryCta: 'Onze diensten'
        },
        services: {
            title: 'Onze Oplossingen',
            itSupport: {
                title: 'IT Support & Reparatie',
                description: 'On-site en remote troubleshooting voor computers, netwerken en thuiskantoren.'
            },
            business: {
                title: 'KMO-oplossingen',
                description: 'Managed IT services, cloud migratie en productiviteitsoptimalisatie voor kmo\'s.'
            },
            webDev: {
                title: 'Web & Digitaal',
                description: 'Website ontwerp en ontwikkeling op maat om uw Belgische bedrijf online te laten groeien.'
            }
        },
        contact: {
            title: 'Neem contact op',
            subtitle: 'Heeft u een technisch probleem of een project? Wij zijn er om te helpen.',
            name: 'Naam',
            email: 'E-mail',
            message: 'Bericht',
            send: 'Verstuur aanvraag'
        }
    }
};

export type Language = keyof typeof translations;
export type TranslationData = typeof translations.en;
