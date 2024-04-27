import Image from 'next/image'
import Link from 'next/link'

export const TopBar = () => {
  return (
    <header className='flex h-14 w-full items-center justify-between px-5 py-[0.8125rem]'>
      <Link href='/'>
        <Image
          src='/homepage/side-project.svg'
          alt='spt tw logo'
          width={83}
          height={30}
        />
      </Link>
    </header>
  )
}
