import Image from 'next/image'
import { SectionTitle } from '@/components/section-title'

const COOPERATION_NAMES = [
  { name: 'sheep', width: 55, height: 55 },
  { name: 'daodao', width: 55, height: 55 },
  { name: 'zeabur', width: 125, height: 24 },
] as const

export const Cooperations = () => {
  return (
    <div className='mb-9 px-5'>
      <SectionTitle type='COOPERATIONS' className='mb-7' />
      <ul className='flex items-center justify-around'>
        {COOPERATION_NAMES.map(({ name, width, height }) => (
          <li key={name}>
            <Image
              src={`/cooperations/${name}.svg`}
              alt={name}
              width={width}
              height={height}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
