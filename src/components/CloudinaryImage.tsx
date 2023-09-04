'use client'
import { CldImage } from 'next-cloudinary'

interface URLProps {
    URL: any
}

export default function CloudinaryImage({ URL }: URLProps) {
    return (
        <div>
            <CldImage
                width="350"
                height="600"
                src={URL}
                alt="Description of my image"
            />
        </div>
    )
}