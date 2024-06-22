import { CATEGORY_LIST } from '@/constants/category'
import type {
  RolesTypes,
  FrontendLanTypes,
  FrontendFrameWorkTypes,
  BackendLangTypes,
  BackendFrameWorkTypes,
  DevopsTypes,
} from '@/types/skills'

type ProjectOwnerRoleTypes = 'owner'
type ProjectOwner = {
  name: string
  personalGithub: string
  role: ProjectOwnerRoleTypes
}

type TagTypes =
  | RolesTypes
  | FrontendLanTypes
  | FrontendFrameWorkTypes
  | BackendLangTypes
  | BackendFrameWorkTypes
  | DevopsTypes
  | 'Open Source'

export type PreviewCardTypes = {
  title: string
  description: string
  imageUrl: string
  tags: TagTypes[]
  isSoftDelete: boolean
  githubUrl: string
  createAt: string
  projectStartedAt: string
  isActive: boolean
  owner: ProjectOwner
}

export type CategoryListType = (typeof CATEGORY_LIST)[number]
