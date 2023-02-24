import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Footer from './components/Footer'

const config: DocsThemeConfig = {
  logo: <img
    width="115"
    height="24"
    style={{
      display: 'block',
      height: '1.5rem',
      width: 'auto',
    }}
    src="/alphacast.svg"
    alt="Alphcast"
  />,
  docsRepositoryBase: 'https://github.com/alphacastio/frontend-documentation/edit/main/',
  footer: {
    text: <Footer />
  },
}

export default config
