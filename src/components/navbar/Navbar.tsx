import { FC } from 'react'
import Container from '../ui/container'
import Link from 'next/link'
import MainNav from './MainNav'
import getCategories from '@/actions/get-categories'
import NavbarActions from './NavbarActions'

export const revalidate = 0

interface NavbarProps {}

const Navbar: FC<NavbarProps> = async ({}) => {
  const categories = await getCategories()

  return (
    <div className="border-b">
      <Container>
        <div className="relative h-16 px-6 md:px-4 lg:px-8 flex items-center">
          <Link href={'/'} className="lg:ml-0 ml-4 flex gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  )
}

export default Navbar
