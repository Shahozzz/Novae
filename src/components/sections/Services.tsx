

import { useI18n } from "@/hooks/useI18n"
import { EditableText } from "@/components/cms/EditableText"
import { Monitor, Shield, Code } from "lucide-react"

export function Services() {

  const { t } = useI18n()

  const services = [

    {
      icon: Monitor,
      title: t.services.itSupport.title,
      id: "services.itSupport.title"
    },

    {
      icon: Shield,
      title: t.services.business.title,
      id: "services.business.title"
    },

    {
      icon: Code,
      title: t.services.webDev.title,
      id: "services.webDev.title"
    }

  ]

  return (

    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">

          <EditableText id="services.title">

            {t.services.title}

          </EditableText>

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service) => {

            const Icon = service.icon

            return (

              <div key={service.id} className="p-6 border rounded-xl">

                <Icon className="w-8 h-8 mb-4" />

                <h3 className="text-xl font-bold">

                  <EditableText id={service.id}>

                    {service.title}

                  </EditableText>

                </h3>

              </div>

            )

          })}

        </div>

      </div>

    </section>

  )

}