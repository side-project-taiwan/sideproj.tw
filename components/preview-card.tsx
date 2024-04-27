import { PreviewCardTypes } from '@/types/projects'
import Image from 'next/image'
import React from 'react'

type PreviewCardProps = PreviewCardTypes

export const PreviewCard = (props: PreviewCardProps) => {
  const { imgUrl, projectName, tags, description, createTime } = props
  return (
    <section className='flex w-full flex-col gap-[0.625rem] border-b-[0.0625rem] border-[#E4E4E7] pb-[1rem] pt-[1.25rem]'>
      <div className='flex gap-[0.75rem]'>
        <Image src={'/logo.svg'} alt='' width={42} height={64} />
        <div className='flex flex-1 flex-col'>
          <span>{projectName}</span>
          <span className='text-[0.625rem] text-[#ff8f5c]'>{createTime}</span>
        </div>
      </div>
      <div className='flex gap-[0.5rem]'>
        {tags.map((tag, index) => {
          return (
            <div
              key={index}
              className='flex h-[1.375rem] w-fit items-center justify-center rounded-[0.25rem] bg-[#E4E4E7] px-[0.5rem] py-[0.25rem] text-[0.625rem] text-[#71717A]'
            >
              {tag}
            </div>
          )
        })}
      </div>
      <div className='line-clamp-3 text-[0.75rem] text-[#71717A]'>
        {description}
        目前對等的例子是 Ant Design 和 Material Design 這類的 Web UI
        Library。Target 是正在軟體相關行業的 UI/UX Designer & Frontend Engineer
        ，讓我們的工作可以更加順利
      </div>
    </section>
  )
}
