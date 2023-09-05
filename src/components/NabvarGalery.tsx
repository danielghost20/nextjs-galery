"use client";
import { ModeToggle } from "@/components/ui/toggle-menu";
import AvatarUser from "@/components/AvatarUser";
import { signOut } from 'next-auth/react'
import { useSession } from "next-auth/react";

export default function NabvarGalery() {
    const { data: session } = useSession()

    return (
        <nav className="fixed top-0 flex items-center justify-between w-full h-16 px-5 border-b-2 bg-background">
            <AvatarUser image={session ? session.user.image : ''} />
            <div className="flex gap-2">
                <button className="px-3 duration-150 border-2 rounded-sm hover:bg-foreground hover:text-background" onClick={async () => { await signOut({ callbackUrl: '/' }) }}>Cerrar secion</button>

                <ModeToggle />
            </div>
        </nav>
    );
}
