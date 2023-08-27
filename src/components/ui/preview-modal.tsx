'use client'

import previewModal from '@/hooks/use-preview-modal'
import { FC } from 'react'
import Modal from './modal'
import Gallery from '../gallery/Gallery'
import Info from './info'

interface PreviewModalProps {}

const PreviewModal: FC<PreviewModalProps> = ({}) => {
  const { isOpen, data, onOpen, onClose } = previewModal()

  if (!data) {
    return null
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="w-full grid grid-cols-1 sm:grid-cols-12 items-start gap-x-6 lg:gap-x-8 gap-y-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={data.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={data} />
        </div>
      </div>
    </Modal>
  )
}

export default PreviewModal
