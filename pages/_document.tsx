import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    const meta = {
        title: "Alphacast Learning Center",
        description: "Unleash your data",
        image: "/alphacast-social.png",
    };

    return (
        <Html lang="en">
            <Head>
                <meta name="robots" content="follow, index" />
                <meta name="description" content={meta.description} />
                <meta property="og:site_name" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@alphacast_" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />

                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=UA-175566358-1`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-175566358-1');
        `}
                </Script>

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
