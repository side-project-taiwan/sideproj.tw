'use client'

import React, { useMemo, useState } from 'react'
import PreviewCard from '@/components/preview-card'
import { SectionTitle } from '@/components/section-title'
import { CATEGORY_LIST } from '@/constants/category'
import { mockData } from '@/constants/mockData'
import { CategoryListTypes } from '@/types/projects'
import { twMerge } from '@/libs/utils'

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
        <ul className='m-0 mb-5 flex list-none border-b border-[#E4E4E7] p-0'>
          {categoryList.map((category, index) => {
            return (
              <li
                key={index}
                onClick={handleCategoryActive(category)}
                className={twMerge(
                  'flex h-10 items-center justify-center px-3 py-2 text-[0.875rem] text-[#A1A1AA]',
                  currentCategory === category && 'border-b-2 border-[#2563EB]',
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
              className='border-b border-[#E4E4E7] pb-4 last:border-0'
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
