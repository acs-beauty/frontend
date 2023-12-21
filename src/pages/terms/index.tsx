import type { NextPage } from 'next'

import UserLayout from '@/components/UserLayout'
import { categories } from '@/data/categories'
import { getHomePageData } from '@/services/pageOperations'
import { HomePageProps } from '@/types/pages'

export const getStaticProps = async () => {
  const result = await getHomePageData()

  return result
}

const Terms: NextPage<HomePageProps> = () => {
  return (
    <UserLayout title={'Умови використання'} categories={categories}>
      <p>Сторінка Умови використання</p>
    </UserLayout>
  )
}

export default Terms
