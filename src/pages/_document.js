import { Html, Head, Main, NextScript } from "next/document";

const YM_ID = 107053828;

export default function Document() {
  return (
    <Html lang="ru">
      <Head />
      <body>
      <Main />
      <NextScript />

      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${YM_ID}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>

      </body>
    </Html>
  );
}