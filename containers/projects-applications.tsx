import { Link } from '@/components/link'
import { Icon } from '@/components/icon'
import { SectionTitle } from '@/components/section-title'
import { ROUTE } from '@/libs/routes'

const CREATE_PROJECT_PATH = ROUTE.CREATE_PROJECT()

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
        href={CREATE_PROJECT_PATH}
        className='flex items-center justify-center gap-x-2 rounded-md bg-blue-600 px-4 py-3 text-sm text-white tablet:w-fit'
      >
        <Icon type='psychiatry' width={20} height={20} />
        開啟專案
      </Link>
    </section>
  )
}
