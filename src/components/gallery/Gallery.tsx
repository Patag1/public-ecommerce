'use client'

import { FC } from 'react'
import { Image as ImageType } from '@/types'
import { Tab } from '@headlessui/react'
import GalleryTab from './GalleryTab'
import Image from 'next/image'

interface GalleryProps {
  images: ImageType[]
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="w-full max-w-2xl lg:max-w-none mx-auto mt-6 sm:block hidden">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image, i) => (
            <GalleryTab key={i} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="w-full aspect-square">
        {images.map((image, i) => (
          <Tab.Panel key={i}>
            <div className="relative w-full h-full aspect-square rounded-lg md:rounded-none overflow-hidden">
              <Image
                src={image.url}
                alt={image.id}
                fill
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Gallery
