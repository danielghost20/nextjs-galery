import FormImage from "@/components/FormImage"
import React from "react"
import NabvarGalery from "@/components/NabvarGalery"
interface ChildrenProps {
    children: React.ReactNode
}

export default function layout({ children }: ChildrenProps) {


    return (
        <>
            <NabvarGalery />
            <div className="fixed left-0 min-h-screen p-5 border-r-2 w-72">
                <FormImage />
            </div>
            <div className="min-h-screen mt-16 ml-72 ">
                {children}
            </div>
        </>
    )
}