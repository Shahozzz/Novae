import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { useBusinessConfig } from "../hooks/useBusinessConfig";

export function AdminPage() {

  const { config, isLoading } = useBusinessConfig();

  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phone: "",
    address: "",
    twitterUrl: "",
    linkedinUrl: "",
    facebookUrl: "",
    instagramUrl: ""
  });

  useEffect(() => {
    if (config) {
      setFormData({
        businessName: config.businessName || "",
        email: config.email || "",
        phone: config.phone || "",
        address: config.address || "",
        twitterUrl: config.twitterUrl || "",
        linkedinUrl: config.linkedinUrl || "",
        facebookUrl: config.facebookUrl || "",
        instagramUrl: config.instagramUrl || ""
      });
    }
  }, [config]);

  if (isLoading) return <div>Loading...</div>;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="container py-20 max-w-xl mx-auto space-y-6">

      <h1 className="text-3xl font-bold">
        Admin Settings
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          placeholder="Business name"
          className="w-full border p-3 rounded"
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border p-3 rounded"
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full border p-3 rounded"
        />

        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full border p-3 rounded"
        />

        <Button type="submit">
          Save
        </Button>

      </form>

    </div>
  );
}
