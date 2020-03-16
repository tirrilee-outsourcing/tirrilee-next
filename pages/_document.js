import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles'

export default class MyDocument extends Document {
  static getInitialProps = async (ctx) => {
    const styledComponentSheet = new StyledComponentSheets()
    const materialUiSheets = new MaterialUiServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            styledComponentSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />),
            ),
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      }
    } finally {
      styledComponentSheet.seal()
    }
  }
  setGoogleTags() {
    return {
      __html: `        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-**********-1');
      `
    };
  }
  render() {
    return (
      <html>
        <Head>
          <meta name="naver-site-verification" content="12005c1a60612f3a3510070ec18a2d7a1553fcab"/>
          {/* SEO */}
          {/* <meta property="og:url" content="https://www.tirrilee.io/"/>
          <meta property="og:image" content={OG_IMGAE}/>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Tirrilee" />
          <meta property="og:description" content="티릴리는 가치를 지향하는 소프트웨어 개발회사 입니다. 기술을 필요한 사람들에게 제공하는 것, 티릴리가 추구하는 ‘가치지향’ 입니다." />
          <meta name="description" content="티릴리는 가치를 지향하는 소프트웨어 개발회사 입니다. 기술을 필요한 사람들에게 제공하는 것, 티릴리가 추구하는 ‘가치지향’ 입니다." />
          <link rel="canonical" href="https://www.tirrilee.io/" /> */}

          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900|Noto+Sans:400,700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          {/* GA Settings */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-*******-1"/>
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
