import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const TopBar = () => {
  return (
    <header
      className={
        'flex h-[3.5rem] w-full items-center justify-between px-[1.25rem] py-[0.8125rem]'
      }
    >
      <Link href={'/'}>
        <Image
          src={'/homepage/side-project.svg'}
          alt='spt.tw'
          width={83}
          height={30}
        />
      </Link>
      <Link href={'#form'}>
        <Image
          className='bg-primary-light h-[2rem] w-[2rem] rounded-lg border-[1px] border-primary p-[0.5rem] active:scale-95'
          src={'/homepage/post_add.svg'}
          alt='spt.tw'
          width={100}
          height={100}
        />
      </Link>
    </header>
  )
}
