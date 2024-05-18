'use client'
import type { CategoryListType, PreviewCardTypes } from '@/types/projects'
import { useCallback } from 'react'
import { useMediaQuery } from '@/libs/hooks/use-media-query'
import { SPTTabs, type SPTTabsProps } from '@/components/tabs'
import PreviewCard from '@/components/preview-card'

type Props = {
  tabs: CategoryListType[]
  projects: Record<CategoryListType['name'], PreviewCardTypes[]>
}

export const ProjectsTab = ({ tabs, projects }: Props) => {
  const isTabletUp = useMediaQuery(
    screen => `only screen and (min-width: ${screen.tablet})`,
  )
  const renderTabContent: SPTTabsProps['renderTabContent'] = useCallback(
    tab => (
      <ul className='mobile_test:hidden m-0 list-none space-y-4 p-0'>
        {projects[tab.value].map((card, index) => (
          <li
            key={index}
            className='border-b border-zinc-200 pb-4 last:border-0 last:pb-0'
          >
            <PreviewCard {...card} />
          </li>
        ))}
      </ul>
    ),
    [projects],
  )

  return (
    <>
      {isTabletUp ? (
        tabs.map(tab => (
          <SPTTabs
            key={tab.value}
            tabs={[tab]}
            renderTabContent={renderTabContent}
            className='mb-[50px]'
          />
        ))
      ) : (
        <SPTTabs tabs={tabs} renderTabContent={renderTabContent} />
      )}
    </>
  )
}
