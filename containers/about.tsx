import Link from 'next/link'
import Image from 'next/image'
import { SectionTitle } from '@/components/section-title'
import { SOCIAL_LINKS } from '@/constants/links'

export const About = () => {
  return (
    <div className='bg-[#2563EB] px-5 py-6 text-[white] '>
      <SectionTitle type='ABOUT' className='text-[inherit]' />

      <div className='mb-4 text-sm'>
        <p>
          Side Project Taiwan
          是一個定期舉辦線下聚會的技術社群，致力於促進專案開發、技術交流和個人成長。我們相信透過專案的實際開發，參與者能夠獲得實質的收穫，並在職涯中取得更多的成就。
        </p>
        <br />
        <p>
          每月一次固定線下聚會，內容涵蓋多面向，包括但不限於開源專案、組隊合作、讀書會（涵蓋
          LeetCode、系統設計、程式語言等主題）以及產品開發等。我們的主軸圍繞著
          Side Project，參與者不僅限於工程師，也歡迎 PM、設計師、QA
          等多元角色參與。歡迎所有對專案開發有興趣的人加入我們，一同打造一個充滿活力且有意義的技術社群！
        </p>
        <br />
        <p>
          有任何建議或想法，歡迎來信：
          <Link
            target='_blank'
            href='mailto:sideproj210@gmail.com'
            className='underline underline-offset-2'
          >
            sideproj210@gmail.com
          </Link>
        </p>
      </div>

      <ul className='flex w-full items-center justify-center gap-2'>
        {SOCIAL_LINKS.map(link => {
          return (
            <li
              key={link.label}
              className='flex h-10 w-full items-center justify-center rounded-md bg-[white]'
            >
              <Link
                href={link.quickLinkPathname}
                className='flex items-center justify-center gap-x-2  text-sm text-[#2563EB]'
              >
                <Image
                  src={`/about/${link.label.toLowerCase()}_icon.svg`}
                  alt={link.label}
                  width={16}
                  height={16}
                />
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
