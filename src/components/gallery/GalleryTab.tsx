import { FC } from 'react'
import { Image as ImageType } from '@/types'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import { cn } from '@/app/lib/utils'

interface GalleryTabProps {
  image: ImageType
}

const GalleryTab: FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex justify-center items-center bg-white aspect-square rounded-md cursor-pointer">
      {({ selected }) => (
        <div>
          <span className="absolute w-full h-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              src={image.url}
              alt={image.id}
              fill
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent'
            )}
          />
        </div>
      )}
    </Tab>
  )
}

export default GalleryTab
