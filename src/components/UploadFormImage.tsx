'use client'
import { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai'
import UploadImages from "@/components/UploadImages";
import Link from 'next/link';

export default function UploadFormImage() {
    const [image, setImage] = useState()
    return (
        <div className="w-full max-w-4xl border-2 flex items-center relative justify-center  h-[500px] rounded-md border-dashed">
            <div className='z-20 flex flex-col items-center gap-4 p-4 border-2 border-dotted rounded-md'>
                <AiOutlineCloudUpload className="text-5xl" />
                <div className='flex gap-3'>
                    <UploadImages setImage={setImage} />
                    <Link href='/dashboard/galery' className='px-3 py-2 duration-150 border-2 rounded-md bg-background text-foreground hover:bg-foreground hover:text-background'>Regresar a galeria</Link>
                </div>
                {image ? <span className='w-full px-4 py-3 text-center text-white bg-green-600 rounded-md'>Imagen subida</span> : ''}
            </div>
        </div>
    )
}