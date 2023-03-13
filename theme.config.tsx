import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Footer from './components/Footer'

const SEOoptions = {
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Alphacast',
            openGraph: {
                title: 'Alphacast Learning Center',
                description: 'Alphacast Learning Center',
                url: 'https://learn.alphacast.io',
                images: [
                    {
                        url: 'https://learn.alphacast.io/alphacast.svg',
                        width: 115,
                        height: 24,
                        alt: 'Alphacast',
                    },
                ],
            },
            twitter: {
                handle: '@Alphacast_',
                site: '@Alphacast_',
                cardType: 'summary_large_image',
            }
        }
    }
}

const config: DocsThemeConfig = {
    ...SEOoptions,
    primaryHue: 272,
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
    feedback: {
        content: null
    },
    footer: {
        text: <Footer />
    },
}

export default config
