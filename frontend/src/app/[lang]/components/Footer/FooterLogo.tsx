import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function FooterLogo({ src, children }: { src: string | null; children?: React.ReactNode }) {
    return (
        <Link href="/" aria-label="Back to homepage" className="flex items-center">
            {src && <Image src={src} alt="logo" width={200} height={52} className="w-[58px] h-[54px] lg:w-[97px] lg:h-[90px]" />}
            {children && <div className="ml-2">{children}</div>}
        </Link>
    );
}