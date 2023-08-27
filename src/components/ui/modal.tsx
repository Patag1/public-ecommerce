'use client'

import { FC, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import IconButton from './icon-button'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog as="div" className="z-10 relative" onClose={onClose}>
        {/* bg */}
        <div className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="min-h-full p-4 flex justify-center items-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl align-middle text-left rounded-lg overflow-hidden">
                <div className="relative w-full px-4 pt-14 pb-8 sm:px-6 sm:pt-8 md:p-6 lg:p-8 flex items-center bg-white shadow-2xl overflow-hidden">
                  <div className="absolute right-4 top-4">
                    <IconButton icon={<X size={15} />} onClick={onClose} />
                  </div>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
