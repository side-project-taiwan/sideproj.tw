import { TopBar } from '@/containers/topbar'
import { Carousel } from '@/containers/carousel'
import { SearchBar } from '@/containers/searchbar'
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
      <Carousel />

      <div className='px-[1.25rem]'>
        {/* 搜尋欄 */}
        <SearchBar />

        {/* 開專案 */}
        <ProjectsApplications />

        {/* 揪夥伴 */}
        <ProjectsPreview />

        {/* 合作夥伴 */}
        <Cooperations />

        {/* 關於 SPT */}
        <About />

        {/* 頁尾 */}
        <Footer />
      </div>
    </div>
  )
}
