'use client'

import { FC } from 'react'
import { Product } from '@/types'
import Image from 'next/image'
import IconButton from '@/components/ui/icon-button'
import { X } from 'lucide-react'
import Currency from '@/components/ui/currency'
import cart from '@/hooks/use-cart'

interface CartItemProps {
  data: Product
}

const CartItem: FC<CartItemProps> = ({ data }) => {
  const { removeItem } = cart()

  const onRemove = () => {
    removeItem(data.id)
  }

  return (
    <li className="flex py-6 border-b">
      <div className="relative w-24 sm:w-48 h-24 sm:h-48 rounded-md overflow-hidden">
        <Image
          src={data?.images?.[0]?.url}
          alt={data?.id}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 sm:ml-6 flex flex-1 flex-col justify-between">
        <div className="z-10 absolute top-0 right-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:pr-0 sm:grid sm:grid-cols-2 sm:gap-x-6">
          <div className="flex justify-between">
            <p className="text-black text-lg font-semibold">{data?.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data?.size?.name}</p>
            <p className="ml-4 pl-4 text-gray-500 border-l border-gray-200">{data?.color?.name}</p>
          </div>
          <Currency value={data?.price} />
        </div>
      </div>
    </li>
  )
}

export default CartItem
