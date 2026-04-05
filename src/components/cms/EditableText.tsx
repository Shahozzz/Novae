import { useState, useEffect } from "react";
const supabase = null as any

type Props = {
    id: string
    children: string
}

export function EditableText({ id, children }: Props) {

    const [value, setValue] = useState(children)
    const [editing, setEditing] = useState(false)

    useEffect(() => {

        async function load() {

            const { data } = await supabase
                .from("content")
                .select("value")
                .eq("id", id)
                .single()

            if (data?.value) setValue(data.value)

        }

        load()

    }, [id])

    async function save() {

        await supabase
            .from("content")
            .upsert({
                id,
                value
            })

        setEditing(false)

    }

    // TEMPORAIRE
    const isAdmin = true
    if (!isAdmin) return <>{value}</>

    if (editing) {

        return (

            <span>

                <textarea
                    value={value}
                    onChange={e => setValue(e.target.value)}
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