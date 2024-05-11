'use client'
import type { CategoryListType } from '@/types/projects'
import { useCallback } from 'react'
import PreviewCard from '@/components/preview-card'
import { SectionTitle } from '@/components/section-title'
import { SPTTabs, type SPTTabsProps } from '@/components/tabs'
import { CATEGORY_LIST } from '@/constants/category'
import { mockData } from '@/constants/mockData'
import { useMediaQuery } from '@/libs/hooks/use-media-query'

const categoryList: CategoryListType[] = CATEGORY_LIST

export const ProjectsPreview = () => {
  const isTabletUp = useMediaQuery(
    screen => `only screen and (min-width: ${screen.tablet})`,
  )
  const renderTabContent: SPTTabsProps['renderTabContent'] = useCallback(
    tab => (
      <ul className='mobile_test:hidden m-0 list-none space-y-4 p-0'>
        {mockData[tab.value].map((card, index) => (
          <li
            key={index}
            className='border-b border-zinc-200 pb-4 last:border-0 last:pb-0'
          >
            <PreviewCard
              imgUrl={card.imgUrl}
              projectName={card.projectName}
              tags={card.tags}
              description={card.description}
              createTime={card.createTime}
            />
          </li>
        ))}
      </ul>
    ),
    [],
  )

  return (
    <section>
      <SectionTitle type='GET_PARTNER' className='mb-2' />
      {/* 內文 project */}
      {isTabletUp ? (
        categoryList.map(category => (
          <SPTTabs
            key={category.value}
            tabs={[category]}
            renderTabContent={renderTabContent}
            className='mb-[50px]'
          />
        ))
      ) : (
        <SPTTabs tabs={categoryList} renderTabContent={renderTabContent} />
      )}
    </section>
  )
}
