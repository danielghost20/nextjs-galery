
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
            {children}
        </>
    )
}