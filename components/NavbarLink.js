"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLink({ url, name }) {
  const pathname = usePathname();
  const active = pathname.includes(url);
  return (
    <Link
      className={`${
        active ? `bg-primary-green text-black` : `bg-green-900`
      } py-1 px-2 rounded-md text-center`}
      href={url}
    >
      {name}
    </Link>
  );
}
