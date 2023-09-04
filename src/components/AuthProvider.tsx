'use client'

import React from "react"
import { SessionProvider } from 'next-auth/react'

interface ChildrenProps {
    children: React.ReactNode
}
export default function AuthProvider({ children }: ChildrenProps) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}