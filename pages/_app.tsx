import 'styles/globals.css'

import type { AppProps } from 'next/app'
import { CacheProvider } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import { NextPageWithLayout } from 'layouts'
import { emotionCache } from './_document'


interface IAppProps extends AppProps {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: IAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <CacheProvider value={emotionCache}>
      <CssBaseline/>
      <Component {...pageProps} />
    </CacheProvider>
  )
}

export default MyApp
