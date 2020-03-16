import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/styles'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const sheet2 = new ServerStyleSheets()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const page2 = renderPage(App => props =>
      sheet2.collect(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    const styleTags2 = sheet2.getStyleElement()
    return { ...page, ...page2, styleTags, styleTags2 }
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          {this.props.styleTags2}
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
