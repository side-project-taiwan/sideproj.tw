import { CategoryListTypes, PreviewCardTypes } from '@/types/projects'

export const mockData: Record<CategoryListTypes, PreviewCardTypes[]> = {
  category1: [
    {
      imgUrl: '',
      projectName: 'Side Project Taiwan 官方網站',
      tags: ['PM', 'UI/UX', 'Front-end', 'Back-end'],
      description:
        'Side Project Taiwan 是一個由軟體開發愛好者成立的開源友善社群, 社群成員包含「開發」「設計」「專案管理」等等想參與專案開發的夥伴！',
      createTime: '2024/02/10',
    },
    {
      imgUrl: '',
      projectName: 'Java 小船（學習及專案）',
      tags: ['UI/UX', 'Front-end', 'Back-end'],
      description:
        '一群初學 java spring boot 的工程師, 希望藉由一起讀書會以及專案建制, 來達成熟悉 java 語言的目標！',
      createTime: '2024/03/10',
    },
    {
      imgUrl: '',
      projectName: '專案主題：島島阿學',
      tags: ['PM', 'UI/UX', 'Front-end', 'Back-end'],
      description:
        '島島阿學期盼以集體智慧，打造沒有天花板的學習環境，一個以自主學習為主的民主社群。邀請所有學習者一同協助彼此在學習時遇到的困境，例如找不到學習目標、合適資源、學習卡關等等問題。',
      createTime: '2020/05/23',
    },
    {
      imgUrl: '',
      projectName: 'zbpack 程式碼自動構建工具',
      tags: ['Front-end', 'Back-end', 'DevOps'],
      description:
        'zbpack 是一個開源的程式碼自動構建工具，無論你的專案使用什麼程式語言或框架，zbpack 都可以在不需要寫額外設定檔的情況下自動分析出你使用的技術，並且選擇最適合的部署策略，並產出 Docker Image、靜態檔案或 Serverless 函數等多種格式的產物。',
      createTime: '2022/12/27',
    },
  ],
  category2: [
    {
      imgUrl: '',
      projectName: 'mock2',
      tags: ['PM', 'UI/UX'],
      description: 'lorem ipsum dolor sit amet, consectetur adip',
      createTime: '2024/02/10',
    },
    {
      imgUrl: '',
      projectName: 'mock2',
      tags: ['PM', 'UI/UX'],
      description: 'lorem ipsum dolor sit amet, consectetur adip',
      createTime: '2024/02/10',
    },
    {
      imgUrl: '',
      projectName: 'mock2',
      tags: ['PM', 'UI/UX'],
      description: 'lorem ipsum dolor sit amet, consectetur adip',
      createTime: '2024/02/10',
    },
  ],
  category3: [
    {
      imgUrl: '',
      projectName: 'mock3',
      tags: ['PM', 'UI/UX'],
      description: 'lorem ipsum dolor sit amet, consectetur adip',
      createTime: '2024/02/10',
    },
    {
      imgUrl: '',
      projectName: 'mock3',
      tags: ['PM', 'UI/UX'],
      description: 'lorem ipsum dolor sit amet, consectetur adip',
      createTime: '2024/02/10',
    },
    {
      imgUrl: '',
      projectName: 'mock3',
      tags: ['PM', 'UI/UX'],
      description: 'lorem ipsum dolor sit amet, consectetur adip',
      createTime: '2024/02/10',
    },
  ],
}
