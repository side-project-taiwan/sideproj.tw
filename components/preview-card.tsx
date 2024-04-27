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
          <Image
            src={'/logo.svg'}
            alt='project thumbnail'
            width={42}
            height={64}
          />
          <div className='flex flex-1 flex-col'>
            <span>{projectName}</span>
            <span className='text-xs text-blue-600'>{createTime}</span>
          </div>
        </div>
        {/* Tags */}
        <ul className='flex items-center gap-x-2'>
          {tags.map((tag, index) => {
            return (
              <li
                key={index}
                className='flex h-[1.375rem] w-fit items-center justify-center rounded-sm bg-zinc-200 px-2 py-1 text-xs text-zinc-500'
              >
                {tag}
              </li>
            )
          })}
        </ul>
      </div>
      <div className='line-clamp-3 text-xs text-zinc-500'>
        {description}
        目前對等的例子是 Ant Design 和 Material Design 這類的 Web UI
        Library。Target 是正在軟體相關行業的 UI/UX Designer & Frontend Engineer
        ，讓我們的工作可以更加順利
      </div>
    </div>
  )
}

export default PreviewCard
