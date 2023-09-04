'use client'
import { Input } from "@/components/ui/input"
import { useState, useRef } from "react"
import { Progress } from "./ui/progress"

export default function FormImage() {
    const [file, setFile] = useState<any>(null)
    const inputRef = useRef<any>()
    const [res, setRes] = useState<boolean>(false)

    const handleRes = () => {
        setRes(true)
    }
    const handleImage = async (e: any) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        })
        const data = await response.json()
        console.log(data)
        inputRef.current.value = ''
        window.location.reload()
    }

    return (
        <form onSubmit={handleImage} className="flex flex-col w-full gap-5 p-2 border-2 rounded-sm">
            <label>Subir imagen</label>
            <Input ref={inputRef} type="file" placeholder="subir imagen" onChange={(e: any) => { setFile(e.target.files[0]) }} />
            <button onClick={handleRes} type="submit">{res ? 'cargando...' : 'Enviar'}</button>
        </form>
    )
}