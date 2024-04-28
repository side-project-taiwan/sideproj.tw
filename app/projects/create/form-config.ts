export const FORM_CONFIG = [
  {
    type: 'input',
    label: '名稱',
    fieldName: 'name',
    fieldProps: {
      placeholder: '請輸入專案名稱',
    },
  },
  {
    type: 'textarea',
    label: '概要',
    fieldName: 'summary',
    fieldProps: {
      placeholder: '請輸入專案概要',
    },
  },
  {
    type: 'input',
    label: '專販封面(選填)',
    fieldName: 'thumbnail',
    fieldProps: {
      type: 'file',
      placeholder: '未選擇檔案',
    },
  },
  {
    type: 'input',
    label: '連結',
    fieldName: 'link',
    fieldProps: {
      placeholder: 'http(s)://',
    },
  },
  {
    type: 'select',
    label: '專案需要的夥伴角色',
    fieldName: 'roles',
    fieldProps: {
      isMulti: true,
      placeholder: '請選擇項目',
      value: [{ label: 'PM', value: 'pm' }],
      options: [
        { label: 'PM', value: 'pm' },
        { label: 'UI', value: 'ui' },
        { label: 'UX', value: 'ux' },
        { label: '前端工程師', value: 'frontend' },
        { label: '後端工程師', value: 'backend' },
        { label: '全端工程師', value: 'fullstack' },
        { label: 'ios', value: 'ios' },
        { label: 'Android', value: 'android' },
      ],
    },
  },

  {
    type: 'input',
    label: '聯絡人 Email',
    fieldName: 'email',
    fieldProps: {
      type: 'email',
      placeholder: 'example@email.com',
    },
  },
] as const
