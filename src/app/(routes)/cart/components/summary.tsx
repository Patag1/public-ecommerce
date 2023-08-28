'use client'

import { FC, useEffect } from 'react'
import cart from '@/hooks/use-cart'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import Currency from '@/components/ui/currency'
import Button from '@/components/ui/button'
import toast from 'react-hot-toast'

interface SummaryProps {}

const Summary: FC<SummaryProps> = ({}) => {
  const { items, removeAll } = cart()

  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed')
      removeAll()
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong')
    }
  }, [searchParams, removeAll])

  const totalPrice = items.reduce((acc, item) => {
    return acc + Number(item.price)
  }, 0)

  const onCheckout = async () => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        prodIds: items.map((item) => item.id),
      }
    )

    window.location = data.url
  }

  return (
    <div className="mt-16 lg:mt-0 px-4 py-6 lg:p-8 sm:p-6 lg:col-span-5 bg-gray-50 rounded-lg ">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="pt-4 flex justify-between items-center border-t border-gray-200">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} className="mt-6 w-full">
        Checkout
      </Button>
    </div>
  )
}

export default Summary
