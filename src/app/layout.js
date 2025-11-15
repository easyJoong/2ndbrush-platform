import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import I18nProvider from '@/contexts/I18nProvider'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '2ndBrush - 프리미엄 뷰티 플랫폼',
  description: '프리미엄 뷰티 서비스를 온라인으로 쉽게 예약하고, 전문 교육을 받으며, 고품질 뷰티 디바이스를 구매할 수 있는 회원제 통합 플랫폼',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <I18nProvider>
          <AuthProvider>
            <Header />
            <main className="min-h-screen pt-20">
              {children}
            </main>
            <Footer />
          </AuthProvider>
        </I18nProvider>
      </body>
    </html>
  )
}