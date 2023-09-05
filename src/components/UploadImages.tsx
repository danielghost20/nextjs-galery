'use client'

import { CldUploadButton } from 'next-cloudinary';

export default function UploadImages() {

    return (
        <div>
            <CldUploadButton uploadPreset='priv69sx' className='w-full max-w-xs px-5 py-2 m-auto border-2 rounded-md' />
        </div>
    )

}
