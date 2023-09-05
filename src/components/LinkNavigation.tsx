"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkNavigation() {
    const pathname = usePathname();
    return (
        <div>
            {!pathname.endsWith("/update-image") === true ? (
                <Link
                    className="block px-3 py-3 m-auto mt-5 text-lg text-center duration-150 border-2 rounded-md hover:bg-foreground hover:text-background bg-background text-foreground"
                    href="/dashboard/galery/update-image"
                >
                    Subir una imagen
                </Link>
            ) : (
                <span></span>
            )}
        </div>
    );
}
