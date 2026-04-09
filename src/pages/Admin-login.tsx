import { useState } from "react"
import { supabase } from "../lib/supabase"

export default function AdminLogin() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = async () => {

        const { error } = await supabase.auth.signInWithPassword({

            email,
            password

        })

        if (!error) {

            window.location.href = "/admin"

        }

    }

    return (

        <div>

            <h1>Admin login</h1>

            <input
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={login}>
                login
            </button>

        </div>

    )
}