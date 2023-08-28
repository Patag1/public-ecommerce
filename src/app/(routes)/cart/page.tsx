'use client'

import { FC, useEffect, useState } from 'react'
import cart from '@/hooks/use-cart'
import Container from '@/components/ui/container'
import CartItem from './components/cart-item'
import Summary from './components/summary'

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [mounted, setMounted] = useState(false)
  const { items } = cart()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-black">Shopping cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {!items.length && (
                <p className="text-neutral-500">No items added to cart</p>
              )}
              <ul>
                {items.map((item, i) => (
                  <CartItem
                    key={i}
                    data={item}
                  />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Page
