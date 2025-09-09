"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
function NavBarLink({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link
      href={href}
      className={isActive ? " text-primary flex justify-center items-center p-2 rounded font-semibold gap-4" : "text-gray-muted flex justify-center items-center p-2 rounded font-semibold gap-4"}
    >
      <Icon />
      <div className="">{label}</div>
    </Link>
  );
}

export default NavBarLink;
