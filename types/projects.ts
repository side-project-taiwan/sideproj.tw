import { CATEGORY_LIST } from '@/constants/category'
import { RolesTypes } from '@/types/language'

export type PreviewCardTypes = {
  imgUrl: string
  projectName: string
  tags: RolesTypes[]
  description: string
  createTime: string
}

export type CategoryListTypes = (typeof CATEGORY_LIST)[number]
