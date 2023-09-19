"use client";
import { ModeToggle } from "@/components/ui/toggle-menu";
import AvatarUser from "@/components/AvatarUser";
import { signOut } from 'next-auth/react'
import { useSession } from "next-auth/react";


export default function NabvarGalery() {
    const { data } = useSession()

    return (
        <nav className="flex items-center justify-between w-full h-16 px-5 border-b-2  bg-background">
            <AvatarUser image={data?.user?.image} />
            <div className="flex gap-2">
                <button className="px-3 duration-150 border-2 rounded-sm hover:bg-foreground hover:text-background" onClick={async () => { await signOut({ callbackUrl: '/' }) }}>Cerrar sesión</button>

                <ModeToggle />
            </div>
        </nav>
    );
}
