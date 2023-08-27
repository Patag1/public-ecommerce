import { create } from 'zustand'
import { Product } from '@/types'

interface previewModalProps {
  isOpen: boolean
  data?: Product
  onOpen: (data: Product) => void
  onClose: () => void
}

const previewModal = create<previewModalProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default previewModal
