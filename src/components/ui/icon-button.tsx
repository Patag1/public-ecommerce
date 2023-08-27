import { cn } from '@/app/lib/utils'
import { FC, MouseEventHandler } from 'react'

interface IconButtonProps {
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  icon: React.ReactElement
}

const IconButton: FC<IconButtonProps> = ({ className, onClick, icon }) => {
  return (
    <button
      className={cn(
        `
        p-2
        flex
        justify-center
        items-center
        bg-white
        border
        rounded-full
        shadow-md
        hover:scale-110
        active:scale-95
        transition
        duration-500
        ease-in-out
      `,
        className
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}

export default IconButton
