import { AiOutlineClose } from 'react-icons/ai'

type Props = {
    value: boolean,
    setValue: (arg: boolean) => void
}

export default function Alert({ value, setValue }: Props) {
    return (
        <div className={`absolute rounded-md border-2 max-w-xs right-5 top-20 ${value ? '' : 'hidden'}   border-green-500 py-2 px-2`}>

            <AiOutlineClose onClick={() => setValue(false)} className="absolute cursor-pointer right-2 top-3" />
            <h2 className="text-lg ">Imagen subida</h2>
            <p className="text-sm">La imagen se subio correctamente ala base de datos</p>
        </div>
    )
}