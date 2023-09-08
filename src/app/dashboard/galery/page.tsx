
'use client'

import useGetImages from '@/hooks/useGetImages';
import Image from 'next/image';
import Link from 'next/link';


export default function Galery() {
    const { resources }: any = useGetImages()
    return (
        <div className='max-w-screen-2xl m-auto flex flex-col justify-end'>
            <Link href='/dashboard/galery/update-image' className='py-2 border-2 my-4 px-4 rounded-md bg-background  text-foreground max-w-max ml-auto'>Subir imagen</Link>
            <section className="w-full gap-2 px-2 columns-1 sm:columns-2 md:columns-3 lg:columns-4">
                {resources?.map((image: any) => (
                    <div className="py-2 m-auto" key={image.images}>
                        <Image className='w-full h-auto' width={300} height={500} src={image.images} alt={image.images} />
                    </div>
                ))}
            </section>
        </div>
    );
}
