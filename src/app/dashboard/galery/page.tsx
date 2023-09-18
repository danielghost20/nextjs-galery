
'use client'

import useGetImages from '@/hooks/useGetImages';
import Image from 'next/image';
import Link from 'next/link';
import { BiShow } from 'react-icons/bi'


export default function Galery() {
    const { resources }: any = useGetImages()
    return (
        <div className='flex flex-col justify-end m-auto max-w-screen-2xl'>
            <Link href='/dashboard/galery/update-image' className='px-4 py-2 my-4 ml-auto border-2 rounded-md bg-background text-foreground max-w-max'>Subir imagen</Link>
            <section className="w-full gap-2 px-2 columns-1 sm:columns-2 md:columns-3 lg:columns-4">
                {resources?.map((image: any) => (
                    <div className="relative py-2 m-auto" key={image.images}>
                        <Image className='w-full h-auto' width={300} height={500} src={image.images} alt={image.images} />
                        <a href={image.images} className='absolute p-3 rounded-md cursor-pointer top-4 right-2 bg-background text-foreground'><BiShow /></a>
                    </div>
                ))}
            </section>
        </div>
    );
}
