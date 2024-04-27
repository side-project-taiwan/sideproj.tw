import Link from 'next/link'
import Image from 'next/image'
import { SectionTitle } from '@/components/section-title'

export const ProjectsApplications = () => {
  return (
    <section>
      <SectionTitle type='NEW_PROJECT' />
      <div className='mb-3 flex flex-col gap-y-1'>
        <span className='text-sm font-[500] text-zinc-900'>
          Hi 你也想開專案嗎
        </span>
        <p className='text-sm text-zinc-500'>
          我們鼓勵各種領域的夥伴一起加入！如果你心裡已經有
          idea，馬上就開專案揪人吧！
        </p>
      </div>
      <Link
        href='#form'
        className='flex h-10 items-center justify-center gap-x-2 rounded-md bg-blue-600 text-sm text-white'
      >
        <Image
          src='project-applications/psychiatry.svg'
          width={20}
          height={20}
          alt='開專案'
        />
        開啟專案
      </Link>
    </section>
  )
}
