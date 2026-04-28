import { ReactNode, useEffect, useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { isSupabaseConfigured, supabase } from "../../lib/supabase"

type Props = {
  id: string
  children: ReactNode
}

export function EditableText({ id, children }: Props) {
  const fallbackValue =
    typeof children === "string" || typeof children === "number"
      ? String(children)
      : ""

  const [value, setValue] = useState(fallbackValue)
  const [editing, setEditing] = useState(false)
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    setValue(fallbackValue)
  }, [fallbackValue])

  useEffect(() => {
    if (!supabase) return

    const client = supabase

    async function load() {
      const { data } = await client
        .from("content")
        .select("body")
        .eq("id", id)
        .single()

      if (data?.body) {
        setValue(data.body)
      }
    }

    load()
  }, [id])

  async function save() {
    if (!supabase) {
      setEditing(false)
      return
    }

    await supabase
      .from("content")
      .upsert({
        id,
        body: value
      })

    setEditing(false)
  }

  const isAdmin = isSupabaseConfigured && isAuthenticated

  if (!isAdmin) return <>{value}</>

  if (editing) {
    return (
      <span>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border p-2"
        />

        <button
          onClick={save}
          className="ml-2 px-2 py-1 bg-black text-white"
        >
          save
        </button>
      </span>
    )
  }

  return (
    <span
      onClick={() => setEditing(true)}
      style={{
        cursor: "pointer",
        outline: "1px dashed orange",
        padding: "2px"
      }}
    >
      {value} ✏️
    </span>
  )
}
