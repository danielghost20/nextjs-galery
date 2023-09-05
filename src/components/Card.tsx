import Image from "next/image";
import SWETER from '../../public/sweter.webp'

export default function Card() {
    return (
        <div className="relative w-full flex items-center  max-w-sm m-auto overflow-hidden rounded-md h-[400px]">
            <Image className="absolute top-0 object-cover w-full brightness-50 " src={SWETER} width={400} height={700} alt="profile_image" />
            <div className="flex flex-col items-center justify-center w-full gap-4">
                <h2 className="z-20 text-3xl font-semibold leading-none text-white">GALERY</h2>
                <p className="z-20 py-2 m-auto text-lg font-medium leading-none text-white" >Galeria de imagenes</p>
                <a href="https://github.com/danielghost20/nextjs-galery" target="blank" className="z-20 px-3 py-2 m-auto text-lg font-medium text-black bg-white rounded-sm">Visitar repositorio</a>
            </div>
        </div>
    )
}