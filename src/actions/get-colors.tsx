import { Color } from '@/types'

const URL = `${process.env.NEXT_ADMIN_API_URL}/colors`

const getColors = async (): Promise<Color[]> => {
  const response = await fetch(URL)

  return response.json()
}

export default getColors
