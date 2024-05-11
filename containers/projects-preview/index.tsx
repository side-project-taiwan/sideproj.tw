import { SectionTitle } from '@/components/section-title'
import { CATEGORY_LIST } from '@/constants/category'
import { mockData } from '@/constants/mockData'
import { ProjectsTab } from './projects-tab'

const tabs = CATEGORY_LIST
const projects = mockData

export const ProjectsPreview = () => {
  return (
    <section>
      <SectionTitle type='GET_PARTNER' className='mb-2' />
      <ProjectsTab tabs={tabs} projects={projects} />
    </section>
  )
}
