import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"

const nextFont = Inter({ subsets: ["latin"] })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nextFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
