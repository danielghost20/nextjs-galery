'use client'
import { Input } from "@/components/ui/input"
import { useState, useRef, useEffect } from "react"

export default function FormImage() {

    const [file, setFile] = useState<any>(null)
    const inputRef = useRef<any>()
    const [res, setRes] = useState<boolean>(false)
    const [fileError, setFileError] = useState('')

    const handleImage = async (e: any) => {
        e.preventDefault()
        if (file) {
            setRes(true)
            const formData = new FormData()
            formData.append('file', file)
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            })
                .then((res) => {
                    if (res.status === 200) {
                        inputRef.current.value = ''
                        window.location.reload()
                    }
                })
                .catch(err => console.log(err))

        } else {
            setFileError('porfavor sube un archivo')
            setRes(false)
            return
        }

    }

    return (
        <form onSubmit={handleImage} className="flex flex-col w-full gap-5 p-2 border-2 rounded-sm">
            <label>Subir imagen</label>
            <Input ref={inputRef} type="file" placeholder="subir imagen" onChange={(e: any) => { setFile(e.target.files[0]) }} />
            <span>{fileError}</span>
            {res ? <span className="text-center text-green-500">Cargando..</span> : <button type="submit">Enviar</button>}

        </form>
    )
}