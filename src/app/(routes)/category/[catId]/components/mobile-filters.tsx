'use client'

import { FC, useState } from 'react'
import { Color, Size } from '@/types'
import Button from '@/components/ui/button'
import { Plus, X } from 'lucide-react'
import { Dialog } from '@headlessui/react'
import IconButton from '@/components/ui/icon-button'
import Filter from './filter'

interface MobileFiltersProps {
  sizes: Size[]
  colors: Color[]
}

const MobileFilters: FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false)

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="z-40 relative lg:hidden"
        onClose={onClose}
      >
        {/* bg */}
        <div className="fixed inset-0 bg-black/25" onClick={onClose} />
        {/* dialog position */}
        <div className="z-40 fixed inset-0 flex">
          <Dialog.Panel className="relative w-full max-w-xs h-full ml-auto py-4 pb-6 flex flex-col bg-white shadow-xl overflow-y-auto">
            {/* close btn */}
            <div className="px-4 flex justify-end items-center">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            {/* filters */}
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />{' '}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default MobileFilters
