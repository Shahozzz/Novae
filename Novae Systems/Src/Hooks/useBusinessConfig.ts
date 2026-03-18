import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { blink } from '../blink/client';
import { toast } from 'react-hot-toast';

export interface BusinessConfig {
    id: string;
    businessName: string;
    email: string;
    phone: string;
    address: string;
    twitterUrl: string;
    linkedinUrl: string;
    facebookUrl: string;
    instagramUrl: string;
    updatedAt: string;
}

export function useBusinessConfig() {
    const queryClient = useQueryClient();

    const { data: config, isLoading, error } = useQuery({
        queryKey: ['businessConfig'],
        queryFn: async () => {
            const results = await blink.db.businessConfig.list({
                where: { id: 'main' },
                limit: 1
            });
            return (results[0] as BusinessConfig) || null;
        }
    });

    const updateConfig = useMutation({
        mutationFn: async (newConfig: Partial<BusinessConfig>) => {
            return blink.db.businessConfig.update('main', {
                ...newConfig,
                updatedAt: new Date().toISOString()
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['businessConfig'] });
            toast.success('Business settings updated successfully!');
        },
        onError: (err: any) => {
            toast.error('Failed to update business settings: ' + err.message);
        }
    });

    return {
        config,
        isLoading,
        error,
        updateConfig
    };
}
