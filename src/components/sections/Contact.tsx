import { useMemo } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { Mail, Phone, MapPin } from "lucide-react"
import { useBusinessConfig } from "@/hooks/useBusinessConfig"
import { useI18n } from "@/hooks/useI18n"
import { EditableText } from "@/components/cms/EditableText"

export function Contact() {

  const { t } = useI18n()
  const { config, isLoading } = useBusinessConfig()

  const contactInfo = useMemo(() => [

    {
      icon: Mail,
      value: config?.email || "hello@beit.solutions",
      id: "contact.email"
    },

    {
      icon: Phone,
      value: config?.phone || "+32 400 000 000",
      id: "contact.phone"
    },

    {
      icon: MapPin,
      value: config?.address || "Brussels",
      id: "contact.address"
    }

  ], [config])

  if (isLoading) return null

  return (

    <section id="contact" className="py-24 px-6">

      <div className="max-w-5xl mx-auto space-y-10">

        <h2 className="text-4xl font-bold text-center">

          <EditableText id="contact.title">
            {t.contact.title}
          </EditableText>

        </h2>

        <p className="text-center text-muted-foreground">

          <EditableText id="contact.subtitle">
            {t.contact.subtitle}
          </EditableText>

        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {contactInfo.map((item) => {

            const Icon = item.icon

            return (

              <div key={item.id} className="p-6 border rounded-xl text-center">

                <Icon className="mx-auto mb-4" />

                <EditableText id={item.id}>
                  {item.value}
                </EditableText>

              </div>

            )

          })}

        </div>

        <form className="space-y-6">

          <div>
            <Label>Name</Label>
            <Input placeholder="John Doe" />
          </div>

          <div>
            <Label>Email</Label>
            <Input placeholder="john@email.com" />
          </div>

          <div>
            <Label>Message</Label>
            <Textarea placeholder="How can we help?" />
          </div>

          <Button>
            Send message
          </Button>

        </form>

      </div>

    </section>

  )

}