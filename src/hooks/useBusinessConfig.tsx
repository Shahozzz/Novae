import { useQuery } from '@tanstack/react-query';

export type BusinessConfigData = {
  businessName?: string;
  email?: string;
  phone?: string;
  address?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
};

export function useBusinessConfig() {

  const query = useQuery<BusinessConfigData>({
    queryKey: ['businessConfig'],

    queryFn: async () => {

      return {
        businessName: 'Novae Systems',
        email: 'novae.systems@icloud.com',
        phone: '+32 455 10 95 55',
        address: 'Chaumont-Gistoux, Belgium',

        twitterUrl: '',
        linkedinUrl: '',
        facebookUrl: '',
        instagramUrl: ''
      };

    }

  });

  return {
    config: query.data,
    isLoading: query.isLoading
  };

}