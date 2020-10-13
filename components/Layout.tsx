import Head from 'next/head'

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTM_ID}`}
        />

        <script
          dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GTM_ID}');
            `,
          }}
        />
        <meta name="description" content={description} />
        <title>🚘{title}</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛠</text></svg>"/>
      </Head>
        <div id="container" className="container">
          {children}
        </div>
    </>
  )
}