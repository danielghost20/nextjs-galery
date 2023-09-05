'use client'
import { Input } from "@/components/ui/input"
import { useState, ChangeEvent, FormEvent } from "react"
import { Progress } from "./ui/progress"
import { useRouter } from "next/navigation"


export default function UploadFormImage() {
    const [file, setFile] = useState<File | null>()
    const [error, setError] = useState<boolean>()
    const [loader, setLoader] = useState<boolean>()
    const [loaderProgress, setLoaderProgress] = useState<number>(14)

    const router = useRouter()

    const handleImage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (file) {
            setError(false)
            setLoader(true)
            const formData = new FormData()
            formData.append('file', file)
            await fetch('/api/upload', {
                method: 'POST',
                body: formData
            })
                .then(res => { if (res.status === 200) { setLoaderProgress(100), router.push('/dashboard/galery') } })
                .catch(err => console.log(err))
        } else {
            setError(true)
        }
    }
    return (
        <form onSubmit={handleImage} className="w-full max-w-4xl border-2 flex  items-center  justify-center p-4 h-[500px] rounded-md border-dashed">
            <div className="flex flex-col items-center justify-center w-full max-w-lg gap-4 px-3 py-4 border-2 border-dotted">
                <Input className="w-full max-w-max" type="file" onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files && e.target.files[0]) {
                        setFile(e.target.files[0]);
                        setError(false)
                    }
                }} />
                <button type="submit" className="px-5 py-2 border-2 rounded-md">Enviar</button>
                {error ? <span className="text-red-500">Porfavor sube una imagen</span> : ''}
                {loader ? <Progress value={loaderProgress} /> : ''}
            </div>
        </form>
    )
}