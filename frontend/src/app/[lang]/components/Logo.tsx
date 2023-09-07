import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo({
  src,
  children,
}: {
  src: string | null;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href="/"
      aria-label="Back to homepage"
      className="flex items-center min-w-[129px] min-h-[120px]"
    >
      {src && <Image src={src} alt="logo" width={129} height={120} />}
      {children && <div className="ml-2">{children}</div>}
    </Link>
  );
}
