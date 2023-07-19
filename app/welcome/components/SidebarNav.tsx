"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ReactElement
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-[#1EB985] text-white hover:bg-muted"
              : " hover:bg-green-300 text-[#A3A4A4] hover:text-white hover:underline",
            "justify-start flex gap-2 h-12 font-semibold"
          )}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </nav>
  )
}