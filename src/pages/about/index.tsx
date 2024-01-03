import type { NextPage } from 'next'

import UserLayout from '@/components/UserLayout'
import { categories } from '@/data/categories'
import { getHomePageData } from '@/services/pageOperations'
import { HomePageProps } from '@/types/pages'

export const getStaticProps = async () => {
  const result = await getHomePageData()

  return result
}

const About: NextPage<HomePageProps> = () => {
  return (
    <UserLayout title={'Про нас'} categories={categories}>
      <p>Сторінка Про нас</p>
    </UserLayout>
  )
}

export default About
