import { useEffect, useState } from "react"
import { isSupabaseConfigured, supabase } from "../lib/supabase"

type ContentItem = {
  id: string
  title?: string | null
  body?: string | null
}

export function AdminPage() {
  const [content, setContent] = useState<ContentItem[]>([])
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    if (!supabase) {
      setErrorMessage("Supabase n'est pas configure.")
      return
    }

    const { data } = await supabase.auth.getSession()

    if (!data.session) {
      window.location.replace("/admin-login")
      return
    }

    loadContent()
  }

  const loadContent = async () => {
    if (!supabase) return

    const { data, error } = await supabase
      .from("content")
      .select("*")

    if (error) {
      setErrorMessage(error.message)
      return
    }

    setContent((data as ContentItem[]) || [])
  }

  const save = async (id: string, body: string) => {
    if (!supabase) return

    const { error } = await supabase
      .from("content")
      .update({ body })
      .eq("id", id)

    if (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-6 py-10">
      <h1 className="text-3xl font-semibold">Admin</h1>

      {!isSupabaseConfigured ? <p>Supabase n'est pas configure.</p> : null}
      {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}

      {content.map((item) => (
        <div key={item.id} className="space-y-2 rounded-lg border p-4">
          <h3 className="font-medium">{item.title || item.id}</h3>

          <textarea
            defaultValue={item.body || ""}
            className="min-h-32 w-full rounded-md border p-3"
            onBlur={(e) => save(item.id, e.target.value)}
          />
        </div>
      ))}

      {isSupabaseConfigured && content.length === 0 && !errorMessage ? (
        <p>Aucun contenu n'a ete trouve.</p>
      ) : null}
    </div>
  )
}
