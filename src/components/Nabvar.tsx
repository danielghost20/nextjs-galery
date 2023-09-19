'use client'
import { Button } from "./ui/button";
import { PiImageFill } from 'react-icons/pi'
import { ModeToggle } from './ui/toggle-menu'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { signIn } from 'next-auth/react'

export default function Nabvar() {


    return (
        <nav className="absolute top-0 flex items-center justify-between w-full h-16 px-2">
            <PiImageFill className="text-4xl" />
            <div className="flex items-center gap-3">
                <Button className="hover:bg-foreground hover:text-background" onClick={async () => await signIn('google', { callbackUrl: '/dashboard/galery' })}>Iniciar Sesión</Button>
                <a href="https://github.com/danielghost20" target="blank" className="p-2 duration-150 border-2 rounded-md hover:bg-foreground hover:text-background">
                    <FiGithub className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/daniel-ramos21/" target="blank" className="p-2 duration-150 border-2 rounded-md hover:bg-foreground hover:text-background">
                    <FiLinkedin className="text-xl" />
                </a>
                <ModeToggle />
            </div>
        </nav>
    );
}
