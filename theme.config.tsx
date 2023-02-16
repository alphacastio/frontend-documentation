import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/alphacastio/frontend-documentation',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/alphacastio/frontend-documentation/edit/main/',
  footer: {
    text: 'Alphacast Documentation',
  },
}

export default config
