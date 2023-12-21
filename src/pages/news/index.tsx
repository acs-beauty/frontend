import type { NextPage } from 'next'

import UserLayout from '@/components/UserLayout'
import { categories } from '@/data/categories'
import { getHomePageData } from '@/services/pageOperations'
import { HomePageProps } from '@/types/pages'

export const getStaticProps = async () => {
  const result = await getHomePageData()

  return result
}

const News: NextPage<HomePageProps> = () => {
  return (
    <UserLayout title={'Новини'} categories={categories}>
      <p>Сторінка з новинами</p>
    </UserLayout>
  )
}

export default News
