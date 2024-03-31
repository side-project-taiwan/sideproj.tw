import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Side Project Taiwan',
  description:
    'Side Project Taiwan 是一個定期舉辦線下聚會的技術社群，致力於促進專案開發、技術交流和個人成長。我們相信透過專案的實際開發，參與者能夠獲得實質的收穫，並在職涯中取得更多的成就。',
  keywords: [
    'Side Project Taiwan',
    'Side Project',
    'Taiwan',
    '專案',
    '專案開發',
    '技術社群',
    '技術交流',
    '線下聚會',
    '聚會',
    '專案開發',
    '個人成長',
    '職涯',
    '成就',
  ],
  openGraph: {
    description:
      'Side Project Taiwan 是一個定期舉辦線下聚會的技術社群，致力於促進專案開發、技術交流和個人成長。我們相信透過專案的實際開發，參與者能夠獲得實質的收穫，並在職涯中取得更多的成就。',
    url: 'https://sideproj.tw',
    images: [{ url: 'https://sideproj.tw/logo.svg' }],
    title: 'Side Project Taiwan',
    locale: 'zh_TW',
    siteName: 'Side Project Taiwan',
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: 'https://sideproj.tw/logo.svg' }],
    site: '@sideprojtw',
    title: 'Side Project Taiwan',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
