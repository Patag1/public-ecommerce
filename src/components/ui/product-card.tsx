'use client'

import { FC, MouseEventHandler } from 'react'
import { Product } from '@/types'
import Image from 'next/image'
import IconButton from './icon-button'
import { Expand, ShoppingCart } from 'lucide-react'
import Currency from './currency'
import { useRouter } from 'next/navigation'
import previewModal from '@/hooks/use-preview-modal'
import cart from '@/hooks/use-cart'

interface ProductCardProps {
  data: Product
}

const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const router = useRouter()

  const { onOpen } = previewModal()
  const { addItem } = cart()

  const onClick = () => {
    router.push(`/product/${data?.id}`)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    onOpen(data)
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    addItem(data)
  }

  return (
    <div
      onClick={onClick}
      className="p-3 space-y-4 bg-white group cursor-pointer border rounded-xl"
    >
      {/* images & action */}
      <div className="relative aspect-squared bg-gray-100 rounded-xl">
        <Image
          src={data?.images?.[0]?.url}
          alt={data?.name}
          width={1}
          height={1}
          className="w-full aspect-square object-cover rounded-md"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* description */}
      <div>
        <p className="text-lg font-semibold">{data?.name}</p>
        <p className="text-sm text-gray-500">{data?.category?.name}</p>
      </div>
      {/* price */}
      <div className="flex justify-between items-center">
        <Currency value={data?.price} />
      </div>
    </div>
  )
}

export default ProductCard
