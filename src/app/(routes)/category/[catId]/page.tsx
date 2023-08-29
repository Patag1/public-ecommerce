import getCategory from '@/actions/get-category'
import getColors from '@/actions/get-colors'
import getProducts from '@/actions/get-products'
import getSizes from '@/actions/get-sizes'
import Billboard from '@/components/Billboard'
import Container from '@/components/ui/container'
import { FC } from 'react'
import Filter from './components/filter'
import NoResults from '@/components/ui/no-results'
import ProductCard from '@/components/ui/product-card'
import MobileFilters from './components/mobile-filters'

export const revalidate = 0

interface pageProps {
  params: { catId: string }
  searchParams: {
    sizeId: string
    colorId: string
  }
}

const page: FC<pageProps> = async ({ params, searchParams }) => {
  const { catId } = params
  const { sizeId, colorId } = searchParams

  const products = await getProducts({ catId, sizeId, colorId })

  const sizes = await getSizes()
  const colors = await getColors()
  const category = await getCategory(catId)

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-6 md:px-4 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:mt-0 lg:col-span-4">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((p, i) => (
                  <ProductCard key={i} data={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default page
