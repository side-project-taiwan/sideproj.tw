'use client'

import React from 'react'
import Link from 'next/link'

import { SectionTitle } from '@/components/section-title'
import { SOCIAL_LINKS } from '@/constants/links'

export const About = () => {
  return (
    <section className='flex w-full flex-col gap-[0.75rem] py-[1.5rem] pb-[1.5rem]'>
      <SectionTitle type='ABOUT' />

      <div className='text-[0.875rem] leading-[1.5313rem]'>
        <div>
          Side Project Taiwan
          是一個定期舉辦線下聚會的技術社群，致力於促進專案開發、技術交流和個人成長。我們相信透過專案的實際開發，參與者能夠獲得實質的收穫，並在職涯中取得更多的成就。
        </div>
        <br />
        <div>
          每月一次固定線下聚會，內容涵蓋多面向，包括但不限於開源專案、組隊合作、讀書會（涵蓋
          LeetCode、系統設計、程式語言等主題）以及產品開發等。我們的主軸圍繞著
          Side Project，參與者不僅限於工程師，也歡迎 PM、設計師、QA
          等多元角色參與。歡迎所有對專案開發有興趣的人加入我們，一同打造一個充滿活力且有意義的技術社群！
        </div>
      </div>

      {/* Links */}
      <div className='flex w-full items-center justify-center gap-[0.5rem]'>
        {SOCIAL_LINKS.map(link => {
          return (
            <Link
              key={link.label}
              href={link.quickLinkPathname}
              className='flex h-[2.5rem] w-full items-center justify-center rounded-md bg-primary-light text-[0.875rem] text-[#2563EB]'
            >
              <img
                src={`/about/${link.label.toLowerCase()}_icon.svg`}
                alt={link.label}
                className='mr-[0.5rem]'
              />
              {link.label}
            </Link>
          )
        })}
      </div>
    </section>
  )
}
