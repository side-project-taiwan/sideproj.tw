export type TextTagType =
  | 'p'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'li'

// TODO: Generic html attribute type according to the text tag
export type TextTagHTMLAttributeType = Record<string, any>

export const getTextTag = (tag: TextTagType) => {
  switch (tag) {
    case 'p':
    case 'h1':
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'li':
      return tag
    case 'span':
    default:
      return 'span'
  }
}
