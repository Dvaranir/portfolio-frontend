import '@/styles/styles.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/global-parts/Layout'
import { useRouter } from 'next/router'
import AuthProvider from '@/components/providers/Auth.provider'


export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  const router = useRouter()
  const isAdminRoute = router.pathname.startsWith('/admin')

  if(isAdminRoute){
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    )
  }

  return (
    <Layout>
      <Component {...pageProps.pageProps} />
    </Layout>
  )
}
