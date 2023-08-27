'use client'

import { FC, useEffect, useState } from 'react'
import Button from '../ui/button'
import { ShoppingBag } from 'lucide-react'

interface NavbarActionsProps {}

const NavbarActions: FC<NavbarActionsProps> = ({}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="px-4 py-2 flex items-center rounded-full bg-black">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  )
}

export default NavbarActions
