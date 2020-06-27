import '../src/styles/styles.scss'
import { ThemeProvider, defaultTheme } from 'evergreen-ui'

const newTheme = {
  ...defaultTheme
}

export default function WikiForest({ Component, pageProps }) {
  return (
    <ThemeProvider value={newTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
