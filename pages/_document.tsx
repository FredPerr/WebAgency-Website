import Document, { Html, Head, Main, NextScript } from "next/document"
import createCache from "@emotion/cache";
import React from "react";


const emotionCache = createCache({key: 'css', prepend: false})

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="fr">
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


export { emotionCache };