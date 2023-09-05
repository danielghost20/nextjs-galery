
import React from "react"
import NabvarGalery from "@/components/NabvarGalery"
import Card from "@/components/Card"
import LinkNavigation from "@/components/LinkNavigation";
interface ChildrenProps {
    children: React.ReactNode
}

export default function layout({ children }: ChildrenProps) {



    return (
        <>
            <NabvarGalery />
            <div className="fixed left-0 min-h-screen gap-3 p-5 border-r-2 w-72">
                <Card />
                <LinkNavigation />
            </div>
            <div className="min-h-screen mt-16 ml-72 ">
                {children}
            </div>
        </>
    )
}