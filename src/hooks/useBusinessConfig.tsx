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
        businessName: 'BE IT Solutions',
        email: 'hello@beit.solutions',
        phone: '+32 400 000 000',
        address: 'Brussels, Belgium',

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