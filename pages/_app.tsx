import '@/styles/styles.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/global-parts/Layout'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
