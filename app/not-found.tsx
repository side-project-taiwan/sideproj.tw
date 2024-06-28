import { Link } from '@/components/link'
import { Image } from '@/components/image'
import { Text } from '@/components/text'

const NotFoundPage = () => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center text-white'>
      <Image
        src='/logo.svg'
        className='logo vite mb-24 scale-[2]'
        width={300}
        height={300}
        alt='logo'
      />
      <Text tag='h2' className='text-3xl'>
        Not Found
      </Text>
      <Text tag='p' className='mb-24'>
        Page not support currently
      </Text>
      <Link href='/'>Go To Home</Link>
    </div>
  )
}

export default NotFoundPage
