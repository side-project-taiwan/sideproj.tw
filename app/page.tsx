import TopBar from '@/containers/topbar'
import Carousel from '@/containers/carousel'
// import SearchBar from '@/containers/searchbar'
import { ProjectsPreview } from '@/containers/projects-preview'
import { Footer } from '@/containers/footer'
import { About } from '@/containers/about'
import { Cooperations } from '@/containers/cooperations'
import { ProjectsApplications } from '@/containers/projects-applications'

export default function Home() {
  return (
    <div className='h-full w-full'>
      {/* 導覽列 */}
      <TopBar />

      {/* 輪播圖 */}
      <section className='mb-6'>
        <Carousel />
      </section>

      <main className='mb-6 flex flex-col items-center justify-center gap-y-6 px-5'>
        {/* 搜尋欄(Phase2) */}
        {/* <SearchBar /> */}

        {/* 揪夥伴 */}
        <ProjectsPreview />

        {/* 開專案 */}
        <ProjectsApplications />
      </main>

      <section>
        {/* 合作夥伴 */}
        <Cooperations />

        {/* 關於 SPT */}
        <About />
      </section>

      {/* 頁尾 */}
      <Footer />
    </div>
  )
}
