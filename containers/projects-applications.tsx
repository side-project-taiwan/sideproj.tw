import Link from 'next/link'
import Image from 'next/image'
import { SectionTitle } from '@/components/section-title'
// import { FORM_CONFIG } from '@/constants/project-form'
// const formConfig = FORM_CONFIG

export const ProjectsApplications = () => {
  return (
    <section>
      <SectionTitle type='NEW_PROJECT' />
      <div className='mb-3 flex flex-col gap-y-1'>
        <span className='text-sm font-[500] text-[#18181B]'>
          Hi 你也想開專案嗎
        </span>
        <p className='text-sm text-[#71717A]'>
          我們鼓勵各種領域的夥伴一起加入！如果你心裡已經有
          idea，馬上就開專案揪人吧！
        </p>
      </div>
      <Link
        href='#form'
        className='flex h-10 items-center justify-center gap-x-2 rounded-md bg-[#2563EB] text-sm text-[white]'
      >
        <Image
          src='project-applications/psychiatry.svg'
          width={20}
          height={20}
          alt='開專案'
        />
        開啟專案
      </Link>

      {/*
      <div className='flex flex-col gap-3'>
        {formConfig.map((item, index) => {
          // 使否有存在的必要
          if (item.tag === 'select') {
            return (
              <div className='flex flex-col gap-[0.5rem]' key={index}>
                <div className='mb-[0.25rem]'>{item.label}</div>
                <select className='h-[2.25rem] w-full rounded-md border-[0.0625rem] border-[#E4E4E7] px-[0.75rem] text-[0.875rem] text-[#A1A1AA]'>
                  <option value='option1'>option1</option>
                  <option value='option2'>option2</option>
                  <option value='option3'>option3</option>
                </select>
              </div>
            )
          }

          if (item.tag === 'textarea') {
            return (
              <div className='flex flex-col gap-[0.5rem]' key={index}>
                <div>{item.label}</div>
                <textarea
                  className='flex h-[5.25rem] w-full items-center justify-center rounded-md border-[0.0625rem] border-[#E4E4E7] pl-[0.75rem] pt-[0.5rem] text-[0.875rem] text-[#A1A1AA]'
                  placeholder={item.placeholder}
                />
              </div>
            )
          }

          if (item.tag === 'input') {
            return (
              <div className='flex flex-col gap-[.5rem]' key={index}>
                <div>{item.label}</div>
TODO 選擇檔案需要調整
                <input
                  className='h-[2.25rem] w-full rounded-md border-[0.0625rem] border-[#E4E4E7] pl-[0.75rem] text-[0.875rem] text-[#A1A1AA]'
                  type={item.type}
                  placeholder={item.placeholder}
                />
              </div>
            )
          }
        })}

        <div className='flex flex-col gap-[0.5rem]'>
          <button className='text-white h-[2.5rem] rounded-md bg-primary text-[0.875rem] text-[white]'>
            提交
          </button>
          <div className='text-[0.75rem]'>
            提交即代表你同意
            <span className='text-primary'>《什麼規則之類的東東XD》</span>
          </div>
        </div>
      </div>
      */}
    </section>
  )
}
