"use client";
import { Input } from "@/components/ui/input";
import { useState, ChangeEvent, FormEvent } from "react";
import { Progress } from "./ui/progress";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function UploadFormImage() {
    const [file, setFile] = useState<File | null>();
    const [error, setError] = useState<boolean>();
    const [loader, setLoader] = useState<boolean>();
    const [loaderProgress, setLoaderProgress] = useState<number>(14);

    const router = useRouter();

    const handleImage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (file) {
            setError(false);
            setLoader(true);
            const formData = new FormData();
            formData.append("file", file);
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            if (data.status === 200) {
                await addDoc(collection(db, 'images'), {
                    images: data.url
                })
                setLoaderProgress(100);
                setTimeout(() => {
                    setLoader(false);
                }, 1500);
                router.refresh();
            }
        } else {
            setError(true);
        }
    };
    return (
        <form
            onSubmit={handleImage}
            className="w-full max-w-4xl border-2 flex  items-center  justify-center p-4 h-[500px] rounded-md border-dashed"
        >
            <div className="flex flex-col items-center justify-center w-full max-w-lg gap-4 px-3 py-4 border-2 border-dotted">
                {!loader ? (
                    <Input
                        placeholder="subir archivo"
                        className="w-full duration-200 cursor-pointer text-center max-w-max hover:bg-foreground hover:text-background"
                        type="file"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            if (e.target.files && e.target.files[0]) {
                                setFile(e.target.files[0]);
                                setError(false);
                            }
                        }}
                    />
                ) : (
                    ""
                )}

                <div className="flex gap-3">
                    {!loader ? (
                        <>
                            <button
                                type="submit"
                                className="px-5 py-2 duration-200 border-2 rounded-md hover:bg-foreground hover:text-background"
                            >
                                Enviar
                            </button>
                            <Link
                                href="/dashboard/galery"
                                className="px-4 py-2 duration-200 border-2 rounded-md max-h-max hover:bg-foreground hover:text-background bg-background text-foreground"
                            >
                                Regresar
                            </Link>
                        </>
                    ) : (
                        ""
                    )}
                </div>
                {error ? (
                    <span className="text-red-500">Porfavor sube una imagen</span>
                ) : (
                    ""
                )}
                {loader ? <Progress value={loaderProgress} /> : ""}
            </div>
        </form>
    );
}
