import { Link } from '@/components/link'
import { Image } from '@/components/image'
import { Text } from '@/components/text'
import { SPTCarousel } from '@/components/carousel'

const mockArray = [1, 2, 3, 4, 5]

export const Carousel = () => {
  return (
    <SPTCarousel>
      {mockArray.map((_, index) => {
        return (
          <Link
            key={index}
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='flex h-[450px] flex-col items-center justify-center text-justify'
          >
            <Image src='logo.svg' width={375} height={211} alt='placeholder' />
            <Text
              color='zinc-500'
              className='max-w-full whitespace-pre-line break-words'
            >
              SPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPTSPT
            </Text>
          </Link>
        )
      })}
    </SPTCarousel>
  )
}
