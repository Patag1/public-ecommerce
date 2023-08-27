'use client'

import { FC, useEffect, useState } from 'react'
import PreviewModal from '@/components/ui/preview-modal'
import { Toaster } from 'react-hot-toast'

interface ModalProviderProps {}

const ModalProvider: FC<ModalProviderProps> = ({}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <PreviewModal />
      <Toaster position="bottom-right" />
    </>
  )
}

export default ModalProvider
