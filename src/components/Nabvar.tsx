'use client'
import { Button } from "./ui/button";
import { PiImageFill } from 'react-icons/pi'
import { ModeToggle } from './ui/toggle-menu'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";

export default function Nabvar() {


    return (
        <nav className="absolute top-0 flex items-center justify-between w-full h-16 px-2">
            <PiImageFill className="text-4xl" />
            <div className="flex items-center gap-3">
                <Button onClick={async () => await signIn('google', { callbackUrl: '/dashboard/galery' })}>Iniciar Secion</Button>
                <a className="p-2 border-2 rounded-md">
                    <FiGithub className="text-xl" />
                </a>
                <a className="p-2 border-2 rounded-md">
                    <FiLinkedin className="text-xl" />
                </a>
                <ModeToggle />
            </div>
        </nav>
    );
}
