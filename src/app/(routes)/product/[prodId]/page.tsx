import { FC } from 'react'
import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import Gallery from '@/components/gallery/Gallery'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/container'
import Info from '@/components/ui/info'

interface pageProps {
  params: { prodId: string }
}

const page: FC<pageProps> = async ({ params }) => {
  const { prodId } = params

  const product = await getProduct(prodId)
  const suggestedProducts = await getProducts({
    catId: product?.category?.id,
  })

  return (
    <div className="bg-white">
      <Container>
        <div className="px-6 md:px-4 lg:px-8 py-10">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-16 md:mt-10 lg:mt-0 md:px-4 px-0">
              <Info data={product} />
            </div>
          </div>
          <hr className='my-10' />
          <ProductList title="More like this" data={suggestedProducts} />
        </div>
      </Container>
    </div>
  )
}

export default page
