import { Product } from '@/types'
import { FC } from 'react'
import NoResults from './ui/no-results'
import ProductCard from './ui/product-card'

interface ProductListProps {
  title: string
  data: Product[]
}

const ProductList: FC<ProductListProps> = ({ title, data }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      {data.length === 0 && <NoResults />}
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-4">
        {data.map((p, i) => (
          <ProductCard key={i} data={p} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
