import { Icon } from '@/components/icon'
import { SectionTitle } from '@/components/section-title'

const COOPERATION_NAMES = [
  { iconType: 'sheep', width: 55, height: 55 },
  { iconType: 'daodao', width: 55, height: 55 },
  { iconType: 'zeabur', width: 125, height: 24 },
] as const

export const Cooperations = () => {
  return (
    <div className='mb-9 px-5'>
      <SectionTitle type='COOPERATIONS' className='mb-7' />
      <ul className='flex items-center justify-around'>
        {COOPERATION_NAMES.map(({ iconType, width, height }) => (
          <li key={iconType}>
            <Icon type={iconType} width={width} height={height} />
          </li>
        ))}
      </ul>
    </div>
  )
}
