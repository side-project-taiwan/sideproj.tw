import Link from 'next/link'
import Image from 'next/image'

const NotFoundPage = () => {
  return (
    <div className='text-white flex h-full w-full flex-col items-center justify-center'>
      <Image
        src='/logo.svg'
        className='logo vite mb-24 scale-[2]'
        width={300}
        height={300}
        alt='logo'
      />
      <h2>Not Found</h2>
      <p className='mb-24'>Page not support currently</p>
      <Link href='/'>Go To Home</Link>
    </div>
  )
}

export default NotFoundPage
