import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function Admin() {

  const [content, setContent] = useState<any[]>([])

  useEffect(() => {

    checkUser()

  }, [])

  const checkUser = async () => {

    const { data } = await supabase.auth.getSession()

    if (!data.session) {

      window.location.href = "/admin-login"

      return

    }

    loadContent()

  }

  const loadContent = async () => {

    const { data } = await supabase

      .from("content")

      .select("*")

    setContent(data || [])

  }

  const save = async (id: string, body: string) => {

    await supabase

      .from("content")

      .update({ body })

      .eq("id", id)

  }

  return (

    <div>

      <h1>Admin</h1>

      {content.map((item: any) => (

        <div key={item.id}>

          <h3>{item.title}</h3>

          <textarea

            defaultValue={item.body}

            onBlur={(e) =>

              save(item.id, e.target.value)

            }

          />

        </div>

      ))}

    </div>

  )
}