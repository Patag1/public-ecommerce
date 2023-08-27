import { FC } from 'react'

interface NoResultsProps {}

const NoResults: FC<NoResultsProps> = ({}) => {
  return (
    <div className="w-full h-full flex justify-center items-center text-neutral-500">
      No results found
    </div>
  )
}

export default NoResults
