import AuthProvider from '@/components/providers/Auth.provider';
import Layout from '@/components/layouts/Layout';

import { useRouter } from 'next/router';
import { config as fontAwesomeConfig} from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from 'next/app';

import '@/styles/styles.scss';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import DashboardLayout from '@/components/layouts/DashboardLayout';


export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  const router = useRouter()
  const isAdminRoute = router.pathname.startsWith('/admin')
  
  fontAwesomeConfig.autoAddCss = false;

  if(isAdminRoute){
    return (
      <AuthProvider>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </AuthProvider>
    )
  }

  return (
    <Layout>
      <Component {...pageProps.pageProps} />
    </Layout>
  )
}
