// import { SearchBar } from '@/containers/searchbar'
import { Carousel } from '@/containers/carousel'
import { ProjectsPreview } from '@/containers/projects-preview'
import { Footer } from '@/containers/footer'
import { About } from '@/containers/about'
import { Cooperations } from '@/containers/cooperations'
import { ProjectsApplications } from '@/containers/projects-applications'

const Home = () => {
  return (
    <main className='h-full w-full'>
      {/* 輪播圖 */}
      <section className='mb-6 w-full'>
        <Carousel />
      </section>

      <div className='container mb-7 flex flex-col items-center justify-center gap-y-6'>
        {/* 搜尋欄(Phase2) */}
        {/* <SearchBar /> */}

        {/* 揪夥伴 */}
        <ProjectsPreview />

        {/* 開專案 */}
        <ProjectsApplications />

        {/* 合作夥伴 */}
        <Cooperations />
      </div>

      {/* 關於 SPT */}
      <About />

      {/* 頁尾 */}
      <Footer />
    </main>
  )
}

export default Home
