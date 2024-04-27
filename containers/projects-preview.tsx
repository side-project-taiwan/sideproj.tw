'use client'

import React, { useMemo, useState } from 'react'
import { PreviewCard } from '@/components/preview-card'
import { SectionTitle } from '@/components/section-title'
import { CATEGORY_LIST } from '@/constants/category'
import { mockData } from '@/constants/mockData'
import { CategoryListTypes } from '@/types/projects'

const categoryList: CategoryListTypes[] = CATEGORY_LIST

export const ProjectsPreview = () => {
  const [currentCategory, setCurrentCategory] =
    useState<CategoryListTypes>('category1')

  const currentData = useMemo(() => {
    return mockData[currentCategory]
  }, [currentCategory])

  const handleCategoryActive = (id: CategoryListTypes) => () => {
    setCurrentCategory(id)
  }

  return (
    <section>
      <div className='mb-[0.25rem] mt-[1.5rem]'>
        {/* 揪夥伴 */}
        <SectionTitle type='GET_PARTNER' />
      </div>

      {/* 內文 project */}
      <div>
        <div className='flex border-b-[0.0625rem] border-[#E4E4E7]'>
          {categoryList.map((category, index) => {
            return (
              <div
                key={index}
                onClick={handleCategoryActive(category)}
                className='active flex h-[2.3125rem] w-[5.75rem] items-center justify-center text-[0.875rem] text-[#A1A1AA] active:border-b-2 active:border-[#2563EB]'
              >
                {category}
              </div>
            )
          })}
        </div>
        <div>
          {currentData.map((card, index) => (
            <PreviewCard
              key={index}
              imgUrl={card.imgUrl}
              projectName={card.projectName}
              tags={card.tags}
              description={card.description}
              createTime={card.createTime}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
