import { FormEvent, useState } from "react"
import { supabase } from "../lib/supabase"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!supabase) {
      setErrorMessage("Supabase n'est pas configure.")
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      setErrorMessage(error.message)
      setIsSubmitting(false)
      return
    }

    window.location.assign("/admin")
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-md items-center px-6">
      <form className="w-full space-y-4 rounded-xl border p-6" onSubmit={login}>
        <h1 className="text-2xl font-semibold">Admin login</h1>

        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
          autoComplete="email"
          required
        />

        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
          autoComplete="current-password"
          required
        />

        {errorMessage ? (
          <p className="text-sm text-red-600">{errorMessage}</p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-black px-4 py-2 text-white disabled:opacity-60"
        >
          {isSubmitting ? "Connexion..." : "login"}
        </button>
      </form>
    </div>
  )
}
