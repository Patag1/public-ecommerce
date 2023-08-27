import Container from '@/components/ui/container'
import Billboard from '@/components/Billboard'
import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import ProductList from '@/components/ProductList'

export const revalidate = 0

export default async function Home() {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard('311208ca-9dfe-4ed9-be0a-0cea2cb80886')

  return (
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard data={billboard} />
        <div className="px-6 md:px-4 lg:px-8 flex flex-col gao-y-8">
          <ProductList title="Featured products" data={products} />
        </div>
      </div>
    </Container>
  )
}
