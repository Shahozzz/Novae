import { useState, useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { useBusinessConfig } from '../hooks/useBusinessConfig';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Save, Loader2, Shield } from 'lucide-react';

export function AdminPage() {
    const { user, isAuthenticated, isLoading: isAuthLoading } = useAuth();
    const { config, isLoading: isConfigLoading, updateConfig } = useBusinessConfig();
    const [formData, setFormData] = useState({
        businessName: '',
        email: '',
        phone: '',
        address: '',
        twitterUrl: '',
        linkedinUrl: '',
        facebookUrl: '',
        instagramUrl: ''
    });

    useEffect(() => {
        if (config) {
            setFormData({
                businessName: config.businessName || '',
                email: config.email || '',
                phone: config.phone || '',
                address: config.address || '',
                twitterUrl: config.twitterUrl || '',
                linkedinUrl: config.linkedinUrl || '',
                facebookUrl: config.facebookUrl || '',
                instagramUrl: config.instagramUrl || ''
            });
        }
    }, [config]);

    if (isAuthLoading || isConfigLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6">
                <div className="text-center space-y-4">
                    <Shield className="w-12 h-12 text-destructive mx-auto" />
                    <h1 className="text-2xl font-bold">Access Denied</h1>
                    <p className="text-muted-foreground">Please sign in to access the admin panel.</p>
                </div>
            </div>
        );
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateConfig.mutate(formData);
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-display font-bold">Admin Settings</h1>
                        <p className="text-muted-foreground">Manage your business contact details and social links here.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <Card className="glass-card border-white/10">
                            <CardHeader>
                                <CardTitle>General Information</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="businessName">Business Name</Label>
                                    <Input
                                        id="businessName"
                                        value={formData.businessName}
                                        onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                                        className="glass-card bg-white/5"
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Public Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                            className="glass-card bg-white/5"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input
                                            id="phone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                            className="glass-card bg-white/5"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address">Business Address</Label>
                                    <Input
                                        id="address"
                                        value={formData.address}
                                        onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                                        className="glass-card bg-white/5"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass-card border-white/10">
                            <CardHeader>
                                <CardTitle>Social Media Links</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="twitter">Twitter URL</Label>
                                        <Input
                                            id="twitter"
                                            value={formData.twitterUrl}
                                            onChange={(e) => setFormData(prev => ({ ...prev, twitterUrl: e.target.value }))}
                                            placeholder="https://twitter.com/..."
                                            className="glass-card bg-white/5"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="linkedin">LinkedIn URL</Label>
                                        <Input
                                            id="linkedin"
                                            value={formData.linkedinUrl}
                                            onChange={(e) => setFormData(prev => ({ ...prev, linkedinUrl: e.target.value }))}
                                            placeholder="https://linkedin.com/company/..."
                                            className="glass-card bg-white/5"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="facebook">Facebook URL</Label>
                                        <Input
                                            id="facebook"
                                            value={formData.facebookUrl}
                                            onChange={(e) => setFormData(prev => ({ ...prev, facebookUrl: e.target.value }))}
                                            placeholder="https://facebook.com/..."
                                            className="glass-card bg-white/5"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="instagram">Instagram URL</Label>
                                        <Input
                                            id="instagram"
                                            value={formData.instagramUrl}
                                            onChange={(e) => setFormData(prev => ({ ...prev, instagramUrl: e.target.value }))}
                                            placeholder="https://instagram.com/..."
                                            className="glass-card bg-white/5"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex justify-end">
                            <Button type="submit" size="lg" disabled={updateConfig.isPending} className="font-bold">
                                {updateConfig.isPending ? (
                                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Saving...</>
                                ) : (
                                    <><Save className="w-4 h-4 mr-2" /> Save Changes</>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}