import { TopBar } from '@/containers/topbar'
import '@/styles/globals.css'

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang='en'>
      <body className='relative'>
        <TopBar />
        {children}
      </body>
    </html>
  )
}

export { metadata } from '@/constants/metadata/layout'
export default RootLayout
