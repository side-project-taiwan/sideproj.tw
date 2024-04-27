'use client'
import type { CategoryListTypes } from '@/types/projects'
import React, { useMemo, useState } from 'react'
import PreviewCard from '@/components/preview-card'
import { SectionTitle } from '@/components/section-title'
import { CATEGORY_LIST } from '@/constants/category'
import { mockData } from '@/constants/mockData'
import { cn } from '@/libs/utils'

const categoryList: CategoryListTypes[] = CATEGORY_LIST

export const ProjectsPreview = () => {
  const [currentCategory, setCurrentCategory] =
    useState<CategoryListTypes>('category1')

  const currentData = useMemo(
    () => mockData[currentCategory],
    [currentCategory],
  )

  const handleCategoryActive = (id: CategoryListTypes) => () => {
    setCurrentCategory(id)
  }

  return (
    <section>
      <SectionTitle type='GET_PARTNER' className='mb-2' />

      {/* 內文 project */}
      <div>
        <ul className='m-0 mb-5 flex list-none border-b border-zinc-200 p-0'>
          {categoryList.map((category, index) => {
            return (
              <li
                key={index}
                onClick={handleCategoryActive(category)}
                className={cn(
                  'flex h-10 items-center justify-center px-3 py-2 text-sm text-zinc-400',
                  currentCategory === category &&
                    'border-b-2 border-blue-600 text-blue-600',
                )}
              >
                {category}
              </li>
            )
          })}
        </ul>
        <ul className='m-0 list-none space-y-4 p-0'>
          {currentData.map((card, index) => (
            <li
              key={index}
              className='border-b border-zinc-200 pb-4 last:border-0'
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
      </div>
    </section>
  )
}
