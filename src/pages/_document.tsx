import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Takashima Katsuhiko</title>
          <meta name="description" content="都内でエンジニアしています。" />
          {/* <meta property="og:url" content="" /> */}
          <meta property="og:title" content="Takashima Katsuhiko" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="都内でエンジニアしています。" />
          {/* <meta property="og:image" content="" /> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@takashima_katsu" />
          <meta property="og:site_name" content="Takashima Katsuhiko" />
          {/* <link rel="icon" href="" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
