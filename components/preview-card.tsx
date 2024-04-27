import { PreviewCardTypes } from '@/types/projects'
import Image from 'next/image'

type PreviewCardProps = PreviewCardTypes

const PreviewCard = (props: PreviewCardProps) => {
  const { imgUrl, projectName, tags, description, createTime } = props
  return (
    <div className='flex w-full flex-col gap-y-2'>
      <div className='flex flex-col gap-y-3'>
        {/* Thumbnail and ProjectName */}
        <div className='flex gap-x-3'>
          <Image src={'/logo.svg'} alt='' width={42} height={64} />
          <div className='flex flex-1 flex-col'>
            <span>{projectName}</span>
            <span className='text-[0.625rem] text-[#ff8f5c]'>{createTime}</span>
          </div>
        </div>
        {/* Tags */}
        <ul className='flex items-center gap-x-2'>
          {tags.map((tag, index) => {
            return (
              <li
                key={index}
                className='flex h-[1.375rem] w-fit items-center justify-center rounded-[0.25rem] bg-[#E4E4E7] px-[0.5rem] py-[0.25rem] text-[0.625rem] text-[#71717A]'
              >
                {tag}
              </li>
            )
          })}
        </ul>
      </div>
      <div className='line-clamp-3 text-[0.75rem] text-[#71717A]'>
        {description}
        目前對等的例子是 Ant Design 和 Material Design 這類的 Web UI
        Library。Target 是正在軟體相關行業的 UI/UX Designer & Frontend Engineer
        ，讓我們的工作可以更加順利
      </div>
    </div>
  )
}

export default PreviewCard
