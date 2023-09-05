'use client'

import { CldUploadButton } from 'next-cloudinary';

type stateProps = {
    setImage: (arg: any) => void
}

export default function UploadImages({ setImage }: stateProps) {

    return (
        <div>
            <CldUploadButton onUpload={(res) => { setImage(res?.info.url) }} uploadPreset='priv69sx' className='w-full max-w-xs px-5 py-2 m-auto border-2 rounded-md' />
        </div>
    )

}
