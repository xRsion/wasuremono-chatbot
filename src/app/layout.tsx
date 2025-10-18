import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "忘れ物サポートBot - AIチャットボットで忘れ物対応を自動化",
  description: "施設・店舗・イベント会場での忘れ物対応を自動化。AIチャットボットがお客様の忘れ物検索を24時間サポート。問い合わせ対応コストを最大70%削減します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.difyChatbotConfig = {
                token: '7JBGaf0CpCxWmRSJ',
                baseUrl: 'https://ai-work.xrsion.co.jp'
              }
            `
          }}
        />
        <script
          src="https://ai-work.xrsion.co.jp/embed.min.js"
          id="7JBGaf0CpCxWmRSJ"
          defer
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            #dify-chatbot-bubble-button {
              background-color: #f67116 !important;
            }
            #dify-chatbot-bubble-window {
              width: 24rem !important;
              height: 40rem !important;
              position: fixed !important;
            }
          `
        }} />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
