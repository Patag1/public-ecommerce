'use client'

import { FC } from 'react'
import { Color, Size } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'
import Button from '@/components/ui/button'
import { cn } from '@/app/lib/utils'

interface FilterProps {
  valueKey: string
  name: string
  data: (Size | Color)[]
}

const Filter: FC<FilterProps> = ({ valueKey, name, data }) => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const selectedValue = searchParams.get(valueKey)

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString())

    const query = {
      ...current,
      [valueKey]: id,
    }

    if (current[valueKey] === id) {
      query[valueKey] = null
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    )

    router.push(url)
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data?.map((filter, i) => (
          <div key={i} className="flex items-center">
            <Button
              className={cn(
                'p-2 bg-white text-sm text-gray-800 border border-gray-300 rounded-md',
                selectedValue === filter.id && 'bg-black text-white'
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filter
