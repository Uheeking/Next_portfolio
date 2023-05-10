import "@/styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import profile from '../public/profile.png'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen min-h-screen px-5 mb-10">
        <Head>
          <title>망그러진 윤만이의 포트폴리오</title>
          <meta name="description" content="유희왕의 코딩은 계속된다." />
          <link rel="icon" href="/profile.png" />
        </Head>
        <Component {...pageProps} />
        </div>
      </Layout>
    </ThemeProvider>
  );
}
