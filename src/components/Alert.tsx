import { AiOutlineClose } from 'react-icons/ai'



export default function Alert() {
    return (
        <div className={`absolute rounded-md border-2 max-w-xs right-5 top-20   border-green-500 py-2 px-2`}>

            <AiOutlineClose className="absolute right-2 top-3" />
            <h2 className="text-lg ">Imagen subida</h2>
            <p className="text-sm">Lorem ipsum dore? Earutas ducimus dolor natus eos, delectus perspicia</p>
        </div>
    )
}