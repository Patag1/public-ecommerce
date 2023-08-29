import { FC } from 'react'
import { Billboard as BillboardType } from '@/types'

interface BillboardProps {
  data: BillboardType
}

const Billboard: FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-6 md:p-4 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="relative aspect-square md:aspect-[2.4/1] bg-cover rounded-xl overflow-hidden"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="max-w-xl md:max-w-xs font-bold text-white text-5xl md:text-3xl lg:text-6xl text-wrap-balance">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billboard
