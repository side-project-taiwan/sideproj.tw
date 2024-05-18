import { CategoryListType, PreviewCardTypes } from '@/types/projects'

export const mockData: Record<CategoryListType['name'], PreviewCardTypes[]> = {
  category1: [
    {
      title: 'Side Project Taiwan 官方網站',
      description:
        'Side Project Taiwan 是一個由軟體開發愛好者成立的開源友善社群, 社群成員包含「開發」「設計」「專案管理」等等想參與專案開發的夥伴！',
      imageUrl: '',
      tags: ['PM', 'UI/UX', 'Front-end', 'Back-end'],
      isSoftDelete: false,
      githubUrl: 'https://github.com/side-project-taiwan/sideproj.tw',
      createAt: '',
      projectStartedAt: '2024/02/10',
      isActive: true,
      owner: {
        name: 'SPT Team',
        personalGithub: 'https://github.com/side-project-taiwan',
        role: 'owner',
      },
    },
    {
      title: 'Java 小船（學習及專案）',
      description:
        '專案敘述：一群初學 java spring boot 的工程師, 希望藉由一起讀書會以及專案建制, 來達成熟悉 java 語言的目標！',
      imageUrl: '',
      tags: ['PM', 'UI/UX', 'Front-end', 'Back-end'],
      isSoftDelete: false,
      githubUrl: 'https://github.com/side-project-taiwan/member',
      createAt: '',
      projectStartedAt: '2024/03/10',
      isActive: true,
      owner: {
        name: 'Yale',
        personalGithub: 'https://github.com/cbot918',
        role: 'owner',
      },
    },
    {
      title: '島島阿學',
      description:
        '島島阿學期盼以集體智慧，打造沒有天花板的學習環境，一個以自主學習為主的民主社群。邀請所有學習者一同協助彼此在學習時遇到的困境，例如找不到學習目標、合適資源、學習卡關等等問題。',
      imageUrl: '',
      tags: [
        'PM',
        'UI/UX',
        'Front-end',
        'Back-end',
        'Education',
        'Self-learning',
      ],
      isSoftDelete: false,
      githubUrl: 'https://github.com/side-project-taiwan/member',
      createAt: '',
      projectStartedAt: '2020/05/23',
      isActive: true,
      owner: {
        name: 'Vincent Hsu',
        personalGithub: 'https://github.com/vincentxuu',
        role: 'owner',
      },
    },
    {
      title: 'zbpack 程式碼自動構建工具',
      description:
        'zbpack 是一個開源的程式碼自動構建工具，無論你的專案使用什麼程式語言或框架，zbpack 都可以在不需要寫額外設定檔的情況下自動分析出你使用的技術，並且選擇最適合的部署策略，並產出 Docker Image、靜態檔案或 Serverless 函數等多種格式的產物。',
      imageUrl: '',
      tags: [
        'PM',
        'UI/UX',
        'Front-end',
        'Back-end',
        'Open Source',
        'Self-learning',
        'Golang',
        'CI/CD',
        'DevOps',
      ],
      isSoftDelete: false,
      githubUrl: 'https://github.com/side-project-taiwan/member',
      createAt: '',
      projectStartedAt: '2022/12/27 ',
      isActive: true,
      owner: {
        name: 'Yuanlin',
        personalGithub: 'https://github.com/yuaanlin',
        role: 'owner',
      },
    },
  ],
  category2: [
    {
      imageUrl: '',
      title: 'mock2',
      tags: ['PM', 'UI/UX'],
      description: 'lorem ipsum dolor sit amet, consectetur adip',
      createAt: '2024/02/10',
    },
    {
      imageUrl: '',
      title: 'mock2',
      tags: ['PM', 'UI/UX'],
      description: 'lorem ipsum dolor sit amet, consectetur adip',
      createAt: '2024/02/10',
    },
    {
      imageUrl: '',
      title: 'mock2',
      tags: ['PM', 'UI/UX'],
      description: 'lorem ipsum dolor sit amet, consectetur adip',
      createAt: '2024/02/10',
    },
  ],
  category3: [
    {
      imageUrl: '',
      title: 'mock3',
      tags: ['PM', 'UI/UX'],
      description: 'lorem ipsum dolor sit amet, consectetur adip',
      createAt: '2024/02/10',
    },
    {
      imageUrl: '',
      title: 'mock3',
      tags: ['PM', 'UI/UX'],
      description: 'lorem ipsum dolor sit amet, consectetur adip',
      createAt: '2024/02/10',
    },
    {
      imageUrl: '',
      title: 'mock3',
      tags: ['PM', 'UI/UX'],
      description: 'lorem ipsum dolor sit amet, consectetur adip',
      createAt: '2024/02/10',
    },
  ],
}
