import Link from 'next/link'
import { Icon } from '@/components/icon'

export const TopBar = () => {
  return (
    <header className='flex h-14 w-full items-center justify-between px-5 py-3 tablet:justify-center'>
      <Link href='/'>
        <Icon type='logo' width={83} height={30} />
      </Link>
    </header>
  )
}
