"use client";
import { ModeToggle } from "@/components/ui/toggle-menu";
import AvatarUser from "@/components/AvatarUser";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from 'next-auth/react'

export default function NabvarGalery() {

    return (
        <nav className="fixed top-0 flex items-center justify-between w-full h-16 px-5 border-b-2 bg-background">
            <AvatarUser />
            <div className="flex gap-2">
                <button className="px-3 border-2 rounded-sm" onClick={async () => { await signOut({ callbackUrl: '/' }) }}>Salir</button>
                <a className="p-2 border-2 rounded-md">
                    <AiOutlineMenu className="text-xl" />
                </a>
                <ModeToggle />
            </div>
        </nav>
    );
}
