import Document, { Html, Head, Main, NextScript } from 'next/document';

const APP_NAME = 'Quiety - Next Js Creative SAAS Technology & IT Solutions React Template';
const APP_DESCRIPTION =
  'Quiety creative Saas, software technology, Saas agency & business react template. It is best and famous software company and Saas website template.';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
