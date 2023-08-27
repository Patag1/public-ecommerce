'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/app/lib/utils'
import { Category } from '@/types'

interface MainNavProps {
  data: Category[]
}

const MainNav: FC<MainNavProps> = ({ data }) => {
  const path = usePathname()
  const routes = data.map((r) => ({
    href: `/category/${r.id}`,
    label: r.name,
    active: path === `/category/${r.id}`,
  }))

  return (
    <nav className="mx-6 flex items-center lg:space-x-6 space-x-4">
      {routes.map((r, i) => (
        <Link
          href={r.href}
          className={cn(
            'text-sm font-medium hover:text-black transition-colors',
            r.active ? 'text-black' : 'text-neutral-500'
          )}
          key={i}
        >
          {r.label}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav
