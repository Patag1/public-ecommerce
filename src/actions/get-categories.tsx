import { Category } from '@/types'

const URL = `${process.env.NEXT_ADMIN_API_URL}/categories`

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(URL)

  return response.json()
}

export default getCategories
